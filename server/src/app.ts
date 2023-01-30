// You'll need to add in the route handler here at the comment below.
// Everything else sets up the middleware, serves the frontend files, and sets up the server

import fs from "fs";
import path from "path";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Throw and show a stack trace on an unhandled Promise rejection instead of logging an unhelpful warning
process.on("unhandledRejection", (err) => {
  throw err;
});

const VERSION_NUMBER = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8")
).version;
const port = process.env.PORT || "8000";
export let app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

import { isAuthenticated } from "./auth/auth";
import { authRoutes } from "./routes/auth";
import { ideaRoutes } from "./routes/idea";

// TODO: Add your other routes here!!
app.use("/ideas", ideaRoutes);
app.use("/auth", authRoutes);


app.use(
  isAuthenticated,
  express.static(path.join(__dirname, "../../client/build"))
);
app.get("*", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(
    `Project Ideas Onboarding Project system v${VERSION_NUMBER} started on port ${process.env.PORT}`
  );
});
