const Task = require('../models/task.model');


exports.createTask = (req,res) => {
   
    if(req.body.title == null){
        return res.status(500).json({
            message:"title req"
        });
    };
    Task.create(req.body, (err,results) => {
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

exports.getAllTask = (req,res) =>{
   
    Task.getAll((err,results) =>{
        if(err){
            return res.status(500).send(err.message);
        
        }
        else{
            res.json(results)
        }
    })
}

exports.getTaskById = (req,res) =>{

    const id = req.params.id;
    Task.getById(id,(err,results) =>{
        if(err){
            return res.status(500).send(err.message);
        }
        else{
            res.json(results);
        }

    })

}

exports.updateTaskById =(req,res) =>{}