// In this file, you'll need to add the route handlers for the idea route
// This code should handle creating and editing new ideas

import express from "express";
import { createNew, IUser, User, IIdea, Idea } from "../schema";
import mongoose from "mongoose";


export let ideaRoutes = express.Router();
//This below is a router. In the other file you will define this router and have it handle a route.
//Let's say the route this router is associated with is ideas. 
//Then all of the routes we create will be an extention of the ideas route.
//For example, we access the add route by going to http://localhost:PORT/ideas/add
//We have given method headers to potential routes to do. 
//However, you can have your own/or change the method headers any way you please!

//In each of the routes, we want the user to be logged in. 
//If so that info is stored in req.user which you can use within these routes!


//For this route we want to do add an idea. 
//We get the idea from our front end and add it to our mongodb database
//The title and description will be sent as a json within a post request.
//title can be access with req.body.title and description as req.body.description
ideaRoutes.route("/add").post(async (req, res, next) => {
  });

//For this route we want to do remove an idea. 
//We get the id of the idea to remove from the route header and remove it from the database!
//There is no data sent within this post request so technically a get request could work too
ideaRoutes.route("/remove/:id").post(async (req, res, next) => {
});

//For this route we want to do edit an idea. 
//We get the id of the idea to edit from the route header. 
//The new title and new description will be sent as a json within a post request.
//title can be access with req.body.title and description as req.body.description
//Now we edit the existing idea in our database with the new data provides to us.
ideaRoutes.route("/edit/:id").post(async (req, res, next) => {
});

//For this route we want to display all of our ideas total!
ideaRoutes.route("/").get(async (req, res, next) => {
});