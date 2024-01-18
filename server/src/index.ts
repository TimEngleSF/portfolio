import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path = require("path");

dotenv.config();

const PORT = process.env.PORT;

const app: Express = express();

app.use(express.static(path.join(__dirname, "../../client/dist/")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
