const db = require('../db');

const TaskModel = {
    create:(task,response) =>{
        db.query(
            'INSERT INTO tasks (title, description, status, due_date) VALUES (?,?,?,?)',
            [task.title, task.description, task.status, task.due_date],
            response
        )
    },
    getAll:(response) =>{
        db.query(
            'SELECT * FROM tasks', response);
    },
    getById:(id, response) =>{
       
        db.query(
            'SELECT * FROM tasks where id = ?',[id], response
        )

        // db.query(
        //     "SELECT * FROM tasks where LOWER(title) = ?",['sleep'],response,
        // )
    },
    updateById:(id,updatetask,response) =>{
console.log(id);
        db.query(
            'UPDATE tasks SET title = ?,description =?, status = ?, due_date = ? WHERE id = ?',[updatetask.title,updatetask.description,updatetask.status,updatetask.due_date,id],response
        )

    },
    delete:(id,response)=>{
       db.query(
        'Delete from tasks where id = ?',[id],response
       )
    }
};
   

module.exports = TaskModel;