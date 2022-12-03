import express from "express";
import { db, connectToDb } from "./db.js";
import { ObjectId } from "mongodb";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

//display recipe details
app.get("/recipe/:id", async (req, res) => {
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

//add recipe

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
app.post("/favorite", (req, res) => {
  const data = req.body;
  db.collection("favorite").updateOne(
    { recipeId: data._id },
    { $set: { isFavorite: true } },

    { upsert: true }
  );
  res.json({ res: "Success" });
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

//connect to database
connectToDb(() => {
  app.listen(8000, () => {
    console.log("Server listening on 8000"); //this is our backend server
  });
});
