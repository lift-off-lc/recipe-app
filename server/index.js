// index.js

import express from "express";
import dotenv from "dotenv"; // Add to import list
import cors from "cors";

import { VerifyToken } from "./FirebaseConfig/VerifyToken.js";


const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(VerifyToken);
dotenv.config();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("working fine");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});