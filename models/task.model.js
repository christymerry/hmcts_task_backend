const db = require('../db');

const TaskModel = {
    create:(task,response) =>{
        db.query(
            'INSERT INTO tasks (title, description, status, due_date) VALUES (?,?,?,?)',
            [task.title, task.description, task.status, task.due_date],
            response
        )
    }
}

module.exports = TaskModel;