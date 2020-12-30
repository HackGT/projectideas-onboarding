import express from "express";
import { createNew, IUser, User, IIdea, Idea } from "../schema";
export let ideaRoutes = express.Router();
import mongoose from "mongoose";

ideaRoutes.route("/add").post(async (req, res, next) => {
  const reqUser = req.user as IUser;
  const user = await User.findById(reqUser._id);
  if (!user) {
    next("Please refresh page");
    return;
  }

  const data = req.body;
  if (!data.title || !data.description) {
    next("Please fill in all required fields!");
    return;
  }

  let idea = createNew<IIdea>(Idea, {
    user: user,
    title: data.title,
    description: data.description,
  });
  /*
    This above is how to add document into collection with mongoose refer to https://mongoosejs.com/docs/models.html constructing documents
    createNew function does this: const idea = new User({user_id: reqUser._id,title: data.title,description: data.description}
    Idea is a model is imported from schema.ts 
    _id field is also added as well. Here a unique id is assigned to the document.
    */
  await idea.save();

  return res.send({ id: idea._id }); // we are sending id created from mongoose to the client side
});

ideaRoutes.route("/remove/:id").post(async (req, res, next) => {
  const reqUser = req.user as IUser;
  const user = await User.findById(reqUser._id);
  if (!user) {
    next("Please refresh page");
    return;
  }
  try {
    Idea.findOneAndRemove(
      { _id: req.params.id, user: user },
      function (err, doc) {
        if (doc) {
          return res.send({ error: false });
        } else {
          next("Idea not found. Please refresh page");
        }
      }
    );
  } catch (e) {
    next("Error removing idea. Please refresh page");
  }
});

ideaRoutes.route("/edit/:id").post(async (req, res, next) => {
  const reqUser = req.user as IUser;
  const user = await User.findById(reqUser._id);
  const data = req.body;

  if (!user) {
    next("Please refresh page");
  }
  if (!data.title || !data.description) {
    next("Please fill in all required fields");
  }

  Idea.findById(req.params.id, function (err, doc) {
    console.log(doc);
  });
  let idea = Idea.findById(req.params.id, function (err, doc) {
    if (doc) {
      doc.title = data.title;
      doc.description = data.description;

      doc.save();
      return res.send({ error: false });
    } else {
      next("Error editing idea. Please try again.");
    }
  });
});

ideaRoutes.route("/").get(async (req, res, next) => {
  const reqUser = req.user as IUser;
  const user = await User.findById(reqUser._id);
  if (!user) {
    next("Please refresh page");
    return;
  }
  let idea = Idea.find({ user: user })
    .select("title description id")
    .exec(function (err, idd) {
      if (err) {
        next("Problem querying ideas. Please refresh page.");
      }
      return res.send(JSON.stringify(idd));
    });
});
