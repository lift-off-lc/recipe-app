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

//connect to database
connectToDb(() => {
  app.listen(8000, () => {
    console.log("Server listening on 8000"); //this is our backend server
  });
});
