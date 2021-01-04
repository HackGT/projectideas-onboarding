// In this file, you'll need to add the route handlers for the idea route
// This code should handle creating and editing new ideas

import express from "express";
import { createNew, IUser, User } from "../schema";
import mongoose from "mongoose";
export let ideaRoutes = express.Router();

