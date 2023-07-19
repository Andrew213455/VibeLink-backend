import express from "express";
import { getClient } from "../db";
import PlayList from "../models/PlayList";

const playlistRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

playlistRouter.get("/playlists", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<PlayList>("playlists").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default playlistRouter;
