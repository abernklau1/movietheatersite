import express from "express"
import dotenv from "dotenv"

const app = express();

import { dirname } from "path"
import path from "path"
import { fileURLToPath } from "url"

import connectDB from "./db/connect.js"

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "../client/public")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => { });

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

// app.use("/api/v1/auth", authRouter);
// app.use("api/v1/user-actions", actionsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});

const port = process.env.PORT || 4000;

const start = () => {
  try {
    // await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
