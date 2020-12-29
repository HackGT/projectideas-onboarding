import fs from "fs";
import path from "path";
import express from "express";
import compression from "compression";
import morgan from "morgan";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();

const VERSION_NUMBER = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8")).version;
const port = process.env.PORT || '8000';
export let app = express();

app.use(morgan("dev"));
app.use(compression());
app.use(express.json());
app.use(cors());

// Throw and show a stack trace on an unhandled Promise rejection instead of logging an unhelpful warning
process.on("unhandledRejection", err => {
    throw err;
});

import { isAuthenticated } from "./auth/auth";
import { authRoutes } from "./routes/auth";
// import { eventRoutes } from "./routes/event";
// import { userRoutes } from "./routes/user";

app.get("/status", (req, res) => {
    res.status(200).send("Success");
});
// app.get("/", (req, res) => {
//     res.redirect("https://live.hack.gt");
// });
app.use("/", (req, res) => {
    res.redirect("https://live.hack.gt");
});
app.use("/auth", authRoutes);
// app.use("/event", isAuthenticated, eventRoutes);
// app.use("/user", userRoutes);

app.get("*", (req, res) => {
    res.status(404).send("Sorry :( this is an invalid url");
})

app.listen(port, () => {
    console.log(`Virtual Check-in system v${VERSION_NUMBER} started on port ${process.env.PORT}`);
});