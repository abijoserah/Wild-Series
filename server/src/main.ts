import "dotenv/config";
import "../database/checkConnection";
import type { RequestHandler } from "express";
import app from "./app";

const port = process.env.APP_PORT;

const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to wild series !");
};

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });

app.get("/", sayWelcome);
