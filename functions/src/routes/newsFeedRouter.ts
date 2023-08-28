import express from "express";
import { getClient } from "../db";
// import { ObjectId } from "mongodb"

import Post from "../models/Post";

const newsFeedRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

newsFeedRouter.get("/newsfeed", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<Post>("newsfeed").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});
newsFeedRouter.get("/newsfeed/:id", async (req, res) => {
  const id: string = req.params.id;
  try {
    const client = await getClient();
    const cursor = client.db().collection<Post>("newsfeed").find({ from: id });
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

newsFeedRouter.post("/newsfeed", async (req, res) => {
  const newPost: Post = req.body;
  try {
    const client = await getClient();
    console.dir(client);
    await client.db().collection<Post>("newsfeed").insertOne(newPost);
    res.status(201).json(newPost);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default newsFeedRouter;
