import express, { response } from "express";
import { db, connectToDb } from "./db.js";
import { ObjectId } from "mongodb";
import cors from "cors";
import fs from 'fs';
import admin from 'firebase-admin';

const credentials = JSON.parse(
  fs.readFileSync('./credentials.json')
);

admin.initializeApp({
  credential: admin.credential.cert(credentials),
})

const app = express();

app.use(cors());

//auto-loads user **info** whenever FE sends/requsets any related info
app.use(express.json());


//connect to database
connectToDb(() => {
  app.listen(8000, () => {
    console.log("Server listening on 8000"); //this is our backend server
  });
});

//loads user **credentials** when needed
app.use(async (req, res, next) => {
  // gets auth token from firebase, which will be located in the headers
  const { authToken } = req.headers;
  
  if(authToken) {
    try{
      //  specifies the individual user
    const user = await admin.auth().verifyIdToken(authToken);
      req.user = user;
  } catch (e){
    //sends error if no such user and/or token, or if no auth token received
    return res.sendStatus(400);
  }
  }

  req.user = req.user || {};
  next();
});


//display recipe details
app.get("/recipe/:id", async (req, res) => {
  //checks recipe id
  const { id } = req.params;
  const recipe = await db.collection("recipes").findOne({ _id: ObjectId(id) });
  recipe ? res.json(recipe) : res.status(404);
});

//display all recipes
app.get("/recipe", (req, res) => {
  db.collection("recipes")
    .find()
    .toArray()
    .then((documents) => res.send(documents));
});

//TODO: Add recipe to server

//  "Gatekeeper" method.
//Checks that user is logged in before allowing them to continue.
//IMPORTANT: next() needs to be located ABOVE any of this file's methods that require a logged-in account, and BELOW anything that doesn't
app.use((req, res, next) => {
  if(req.user) { 
    next();
  } else {
    return res.sendStatus(401);
  }
});

//delete recipe
app.delete("/recipe/:id", async (req, res) => {
  const { id } = req.params;
  const recipe = await db
    .collection("recipes")
    .deleteOne({ _id: ObjectId(id) });
  recipe ? res.json(recipe) : res.status(404);
});

//FAVORITE RECIPES
//display favorites recipes
app.get("/favorite", async (req, res) => {
  const objs = await db.collection("favorite").find().toArray();
  const ids = objs.map((obj) => ObjectId(obj.recipeId));
  db.collection("recipes")
    .find({ _id: { $in: ids } })
    .toArray()
    .then((documents) => res.send(documents));
});

// add recipeId to favorite list of recipes
app.post("/favorite", async (req, res) => {
  const data = req.body;
  const { uid }= req.user;

  const objs = await db.collection("favorite").find().toArray();
  const ids = objs.map((obj) => ObjectId(obj.recipeId));
  const previouslyFavorited = db.collection("recipes")
    .find({ _id: { $in: ids } })
  
  if(!previouslyFavorited){
    db.collection("favorite").updateOne(
    { recipeId: data._id },
    { $set: { isFavorite: true } },

    { upsert: true }
  );
  res.json({ res: "Success" });}
  
});

//delete favorite recipe
app.delete("/favorite", (req, res) => {
  const data = req.body;
  db.collection("favorite").deleteOne({ recipeId: data._id });
  res.json({ res: "Deleted successfully" });
});

//SHOPPING LIST
//display shoppinglist
app.get("/shoppinglist", async (req, res) => {
  const objs = await db.collection("shoppinglist").find().toArray();
  const ids = objs.map((obj) => ObjectId(obj.recipeId));
  db.collection("recipes")
    .find({ _id: { $in: ids } })
    .toArray()
    .then((documents) => res.send(documents));
});

//add recipes to shoppinglist
app.post("/shoppinglist", (req, res) => {
  const data = req.body;
  db.collection("shoppinglist").updateOne(
    { recipeId: data._id },
    { $set: { isInShoppingList: true } },
    { upsert: true }
  );
  res.json({ res: "Added to shopping list" });
});

//remove shopped ingrediernts 
app.delete("/shoppinglist", (req, res) => {
  const data = req.body;
  db.collection("shoppinglist").deleteOne({ recipeId: data._id });
  res.json({ res: "Deleted successfully" });
});
