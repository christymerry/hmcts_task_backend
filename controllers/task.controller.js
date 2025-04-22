const Task = require('../models/task.model');


exports.createTask = (req,res) => {
    if(req.body.title == null){
        return res.status(500).json({
            message:"title req"
        });
    };
    Task.create(req.body, (err,result) => {
        if(err){
            res.status(500).json({
                message:"Something went wrong"
            });
        }
        else{
            res.status(201).json({
                message:"Successfully added"
            });
        }
    });
}