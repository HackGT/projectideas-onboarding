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
    if (!req.body.title || !req.body.description) {
      //next("Please give me a title or description");
      return res.sendStatus(400);
    }

    let idea = createNew<IIdea>(Idea, {
      user: req.user as IUser,
      title: req.body.title,
      description: req.body.description,
    })
    await idea.save();
    return res.send({id: idea._id});
  });

//For this route we want to do remove an idea. 
//We get the id of the idea to remove from the route header and remove it from the database!
//There is no data sent within this post request so technically a get request could work too
ideaRoutes.route("/remove/:id").post(async (req, res, next) => {
  const idea = await Idea.findOne({_id: req.params.id});
  const user = req.user as IUser;

  if (idea == null) {
    return res.status(404).send("idea not found");
  } else if (String(idea.user) !== String(user._id) && !user.admin) {
    return res.status(401).send("user not authorized to remove this idea");
  }

  const removed = await idea.delete();
  return res.send(removed);
});

//For this route we want to do edit an idea. 
//We get the id of the idea to edit from the route header. 
//The new title and new description will be sent as a json within a post request.
//title can be access with req.body.title and description as req.body.description
//Now we edit the existing idea in our database with the new data provides to us.
ideaRoutes.route("/edit/:id").post(async (req, res, next) => {
  const idea = await Idea.findOne({_id: req.params.id});
  const user = req.user as IUser;

  if (idea == null) {
    return res.status(404).send("idea not found");
  } else if (String(idea.user) !== String(user._id) && !user.admin) {
    return res.status(401).send("user not authorized to edit this idea");
  }

  idea.title = req.body.title;
  idea.description = req.body.description;

  await idea.save();
  return res.send({id: idea._id});
});

//For this route we want to display all of our ideas total!
ideaRoutes.route("/").get(async (req, res, next) => {
  const user = req.user as IUser;
  const ideas = await Idea.find({user: user});
  res.send(ideas);
});