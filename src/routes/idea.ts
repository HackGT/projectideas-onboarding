import express from "express"
import { IUser, User} from "../schema";
export let ideaRoutes = express.Router();

ideaRoutes.route("/add").post(async (req, res) => {
    // console.log(req);
    const reqUser = req.user as IUser;
    //console.log(reqUser);
    const user = await User.findById(reqUser._id);
    if (!user) {
        return res.status(400).send("Invalid request");
    }
    const data = req.body;
    if ( !data.title || !data.description) {
        return res.status(400).send({ error: true, message: "Invalid request" });
    }
    let s = Math.random().toString(36).substr(2, 9);
    const notIn = user.ideas.filter(userIdea => userIdea.id === s).length === 0;
    if (notIn) {
        user.ideas.push({
            id: s,
            title: data.title,
            description: data.description
        });
        await user.save(err => console.log(err));
    } else {
        return res.status(400).send({ error: true, message: "Random id generator found duplicates!!" });
    }
    // console.log(s)
    return res.send({ id: s });
});


ideaRoutes.route("/remove/:id").post(async (req, res) => {
    const reqUser = req.user as IUser;
    const user = await User.findById(reqUser._id);
    let ideaId = req.params.id
    if (!user) {
        return res.status(400).send("Invalid request");
    }
    const data = req.body;
    if (!data.title || !data.description) {
        return res.status(400).send({ error: true, message: "Invalid request" });
    }
    const notIn = user.ideas.filter(userIdea => userIdea.id === ideaId).length === 0;
    if (notIn) {
        return res.status(400).send({ error: true, message: "Id provided doesn't match any Idea" });
    }
    user.ideas = user.ideas.filter(userIdea => userIdea.id != ideaId);
    await user.save(err => console.log(err));
    return res.send({ error: false });

});


ideaRoutes.route("/edit/:id").post(async (req, res) => {
    const reqUser = req.user as IUser;
    const user = await User.findById(reqUser._id);
    let ideaId = req.params.id
    if (!user) {
        return res.status(400).send("Invalid request");
    }
    const data = req.body;
    if (!data.title || !data.description) {
        return res.status(400).send({ error: true, message: "Invalid request" });
    }
    const notIn = user.ideas.filter(userIdea => userIdea.id === ideaId).length === 0;
    if (notIn) {
        return res.status(400).send({ error: true, message: "Id provided doesn't match any Idea" });
    }
    user.ideas.forEach( (idea) => {
        if (idea.id==ideaId) {
            idea.title = data.title;
            idea.description = data.description;
        }
    });
    await user.save(err => console.log(err));
    return res.send({ error: false });
});



ideaRoutes.route("/ideas").get(async (req, res) => {
    const reqUser = req.user as IUser;
    const user = await User.findById(reqUser._id);
    if (!user) {
        return res.status(400).send("Invalid request");
    }
    res.send({ideas: user.ideas});
});


