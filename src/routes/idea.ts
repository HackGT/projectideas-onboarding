import express from "express"
// import mongoose from 'mongoose';
import { createNew, IUser, User, IIdea, Idea} from "../schema";
export let ideaRoutes = express.Router();

ideaRoutes.route("/add").post(async (req, res) => {
    const reqUser = req.user as IUser;
    const user = await User.findById(reqUser._id);
    if (!user) {
        return res.status(400).send("Invalid request");
    }
    const data = req.body;
    if ( !data.title || !data.description) {
        return res.status(400).send({ error: true, message: "Invalid request" });
    }
    // let s = Math.random().toString(36).substr(2, 9);
    // let idea = await Idea.findOne({ id: s });

    let idea = createNew<IIdea>(Idea, {
         user_id: reqUser._id.toString(),
         title: data.title,
         description: data.description
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


ideaRoutes.route("/remove/:id").post(async (req, res) => {
    const reqUser = req.user as IUser;
    const user = await User.findById(reqUser._id);
    let ideaId = req.params.id
    const data = req.body;
    if (!user) {
        return res.status(400).send("Invalid request");
    }
    let idea = Idea.findByIdAndRemove(req.params.id, function (err, doc) {
        if (doc) {
            return res.send({ error: false });
        } else {
            console.log('hererere')
            return res.status(400).send({ error: true, message: "Id provided doesn't match any Idea" });
        }
    })
    // console.log(idea)
    // if (!idea) {
    //     return res.status(400).send({ error: true, message: "Id provided doesn't match any Idea" });
    // }
    // return res.send({ error: false });
});


ideaRoutes.route("/edit/:id").post(async (req, res) => {
    const reqUser = req.user as IUser;
    const user = await User.findById(reqUser._id);
    console.log(user)
    let ideaId = req.params.id
    const data = req.body;
    if (!user || !data.title || !data.description) {
        return res.status(400).send({ error: true, message: "Invalid request" });
    }
    // let idea = Idea.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {title: data.title, description: data.description})
    // console.log(idea)
    Idea.findById(req.params.id, function (err, doc) {
        console.log(doc)
    })
    let idea = Idea.findById(req.params.id/*mongoose.Types.ObjectId(req.params.id)*/, function (err, doc) {
      if (doc) {
          doc.title = data.title;
          doc.description = data.description;
          console.log(doc)
          // doc.save(callback);
          doc.save();
          return res.send({ error: false });
      } else {
        console.log('hererere')
        return res.status(400).send({ error: true, message: "Id provided doesn't match any Idea" });
      }
      
    });
});


ideaRoutes.route("/ideas").get(async (req, res) => {
    const reqUser = req.user as IUser;
    const user = await User.findById(reqUser._id);
    if (!user) {
        return res.status(400).send("Invalid request");
    }
    let idea = Idea.find({user_id:reqUser._id.toString()}).select('title description -_id').lean().exec(function (err, idd) {
        return res.send(JSON.stringify(idd));
    });

    // console.log(idea)
    // res.send({ideas: idea}); // If none are added by user, it returns empty json
});


