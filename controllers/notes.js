const Note = require('../models/Note');

module.exports = {
    getNotes: async (req,res)=>{
        try{
            const bullets = await Note.find();
            const itemsLeft = await Note.countDocuments({completed: false});
            res.render('notes.ejs', {notes: bullets, left: itemsLeft});
        }catch(err){
            return err;
        }
    },
    createNote: async (req, res)=>{
        try{
            await Note.create({note: req.body.bullet, completed: false});
            res.redirect('/notes');
        }catch(err){
            return err;
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Note.findOneAndUpdate({_id:req.body.noteIdFromJSFile},{
                completed: true
            });
            res.json('Marked Complete');
        }catch(err){
            return err;
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Note.findOneAndUpdate({_id:req.body.noteIdFromJSFile},{
                completed: false
            })
            res.json('Marked Incomplete');
        }catch(err){
            return err;
        }
    },
    deleteNote: async (req, res)=>{
        console.log(req.body.noteIdFromJSFile)
        try{
            await Note.findOneAndDelete({_id:req.body.noteIdFromJSFile});
            res.json('Deleted It');
        }catch(err){
            return err;
        }
    }
}    