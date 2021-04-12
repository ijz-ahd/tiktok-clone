import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Videos from "./dbModel.js";

// 8IY4dQ5w5Dhs35pc

//App config
const app = express();
const port = process.env.PORT || 9000;
dotenv.config();

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//Db config
const connectionUrl = `mongodb+srv://admin:${process.env.DB_KEY}@cluster0.e0ffu.mongodb.net/tiktokdb?retryWrites=true&w=majority`;
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//API endpoint
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(data);
});

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listener
app.listen(port, () => console.log(`Listening on port: ${port}`));
