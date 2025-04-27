const Task = require('../models/task.model');


exports.createTask = (req,res) => {
   
    if(req.body.title == null || req.body.due_date == null){
        return res.status(400).json({
            message:"Title & Due Date are required"
        });
    };
    Task.create(req.body, (err,results) => {
        if(err){
            res.status(500).json({
                message : "Something went wrong",
                err : err
            });
        }
        else{
            res.status(201).json({
                message : "Successfully added",
                data: {
                    task_id: results.insertId,
                    title : req.body.title,
                    description : req.body.description,
                    due_date : req.body.due_date,
                    status : "New"
                  }
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

        // If no task is found
        if (results.length === 0) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }

        res.json(results);

    })

}

exports.updateTaskById =(req,res) =>{
    const id = req.params.id;

    const {title, description, status, due_date} = req.body;

    if(!title || !description || !status || !due_date) {
        return res.status(400).json({
            message:"Title, Description, Status, and Due Date fields are mandatory"
        });
    }

    Task.getById(id, (err, task) => {
        if (err) {
            return res.status(500).json({ message: "Server error", error: err.message });
        }

        if (task.length === 0) {
            return res.status(404).json({ message: "Task not found" });
        }

        Task.updateById(id,req.body,(err,result)=>{
            if(err){
                return res.status(500).send(err.message);
            }
            else{
                res.status(200).json({
                    message: "Updated Successfully",
                    data : {
                        id : id,
                        title,
                        description,
                        status,
                        due_date
                    }
                })
            }

        })
    })    
}

exports.deleteTask =(req,res) =>{
    const id = req.params.id;

    Task.getById(id, (err, task) => {
        if (err) {
            return res.status(500).json({ message: "Server error", error: err.message });
        }

        if (task.length === 0) {
            return res.status(404).json({ message: "Task not found" });
        }

        Task.delete(id,(err,result) =>{
            if(err){
                return res.status(500).send(err.message);
            }
            else{
                res.status(200).json({
                    message:"Deleted Successfully"
                })
            }

        }) 
    })    
}