import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import playlistRouter from "./routes/playlistRouter";
import newsFeedRouter from "./routes/newsFeedRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", playlistRouter);
app.use("/", newsFeedRouter);

export const api = functions.https.onRequest(app);
