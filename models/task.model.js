const db = require('../db');

const TaskModel = {
    create:(task,response) =>{
        db.query(
            'INSERT INTO tasks (title, description, status, due_date) VALUES (?,?,?,?)',
            [task.title, task.description, 'New', task.due_date],
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

    },

    updateById:(id,updatetask,response) =>{
        db.query(
            'UPDATE tasks SET title = ?,description =?, status = ?, due_date = ? WHERE id = ?',
            [updatetask.title,updatetask.description,updatetask.status,updatetask.due_date,id],
            response
        )
    },

    delete:(id,response)=>{
       db.query(
        'Delete from tasks where id = ?',[id],response
       )
    }
};
   

module.exports = TaskModel;