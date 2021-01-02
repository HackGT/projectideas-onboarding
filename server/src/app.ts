import fs from "fs";
import path from "path";
import express from "express";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const VERSION_NUMBER = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8")
).version;
const port = process.env.PORT || "8000";
export let app = express();

app.use(morgan("dev"));
app.use(compression());
app.use(express.json());
app.use(cors());

// Throw and show a stack trace on an unhandled Promise rejection instead of logging an unhelpful warning
process.on("unhandledRejection", (err) => {
  throw err;
});

import { isAuthenticated } from "./auth/auth";
import { authRoutes } from "./routes/auth";
import { ideaRoutes } from "./routes/idea";
