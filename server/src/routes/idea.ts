import express from "express";
import { createNew, IUser, IIdea, Idea } from "../schema";

export let ideaRoutes = express.Router();

ideaRoutes.route("/add").post(async (req, res, next) => {
  console.log('req: ', req.user)
  if (!req.body.title || !req.body.description) {
    next("Please fill in both the title and description of the new note!");
    return;
  }
  let idea = createNew<IIdea>(Idea, {
    user: req.user as IUser,
    title: req.body.title,
    description: req.body.description,
  });

  await idea.save();

  return res.send({ id: idea._id }); // we are sending id created from mongoose to the client side
});

ideaRoutes.route("/remove/:id").post(async (req, res, next) => {
  await Idea.deleteOne({ _id: req.params.id });

  res.send({ error: false });
});

ideaRoutes.route("/edit/:id").post(async (req, res, next) => {
  if (!req.body.title || !req.body.description) {
    next("Please fill in all required fields");
    return;
  }

  let idea = await Idea.findById(req.params.id);

  if (idea) {
    idea.title = req.body.title;
    idea.description = req.body.description;

    await idea.save();
    res.send({ error: false });
  } else {
    next("Error editing idea. Please try again.");
    return;
  }
});

ideaRoutes.route("/").get(async (req, res, next) => {
  const user = req.user as IUser;

  const ideas = await Idea.find({ user: user });

  res.send(ideas);
});
