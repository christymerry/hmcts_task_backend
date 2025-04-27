# hmcts_task_backend

## Overview

This is a simple RESTful API built using **Node.JS** and **MySQL** database for a task tracking system. This API allows users to manage tasks, including creating new tasks, retrieving task details, updating task information, and deleting tasks.

## Requirements

1. **Node.JS**
2. **MySQL**

## Setting Up & Running Project

Follow the steps below to set up the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/christymerry/hmcts_task_backend.git
    ```

2. Set up the database:
    - Open any MySQL service that can run queries.
    - Copy the queries from the `database.sql` file inside the cloned repo and execute them.
    - This will create the required database, table, and some sample data.

3. Install dependencies:
    - Run `npm install` inside the cloned repository to install all necessary packages.

4. Configure Environment Variables:
    - Create a `.env` file in the root of the project directory and add the following variables:
    
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=
    DB_NAME=hmcts_task_db
    ```

    - Replace `DB_PASS` with your actual MySQL password if necessary.
  
  5. Run the application
     `npm start`


### API Documentation
**1. Create a Task**
  - Endpoint: `POST /api/tasks/`
  - Description: Creates a new task in the database
  - Request body:
    ```
    {
      "title" : "New Task", // Required
      "description" : "This is a test description",
      "due_date": "2025-04-27T14:30:00Z" // Required
    }
    ```
  - Reponse:
      - Status: 201 Created
      - Body:
      ```
      {
        "message": "Successfully added",
        "data": {
            "task_id": 14,
            "title": "New Task",
            "description": "This is a test description",
            "due_date": "2025-04-27T14:30:00Z",
            "status": "New"
        }
      }
      ```
  - Error Response (If title or due_date is missing)
      - Status: 400 Bad Request
      - Body:
        ```
        {
            "message": "Title & Due Date are required"
        }
        ```


**2. Get All Tasks**
  - Endpoint: `GET /api/tasks/`
  - Description: Retrieves a list of all tasks in the system
  - Reponse:
      - Status: 200 OK
      - Body:
      ```
      [
        {
            "id": 4,
            "title": "Verify interpreter availability",
            "description": "Check interpreter availability for upcoming hearings with foreign language requirements.",
            "status": "New",
            "due_date": "2025-05-03T10:00:00.000Z",
            "isDeleted": 0,
            "created_on": "2025-04-27T18:58:02.000Z",
            "updated_on": "2025-04-27T18:58:02.000Z"
        },
        {
            "id": 9,
            "title": "New Task",
            "description": "This is a test description",
            "status": "New",
            "due_date": "2025-04-27T13:30:00.000Z",
            "isDeleted": 0,
            "created_on": "2025-04-27T21:10:32.000Z",
            "updated_on": "2025-04-27T21:10:32.000Z"
        },
      ]
      ```

**3. Get a Specific Task**
  - Endpoint: `GET /api/tasks/:id`
  - Description: Retrieves the details of a specific task by ID
  - URL Parameters:
      `id` (required) : The ID of the task to retrieve.
  - Reponse:
      - Status: 200 OK
      - Body:
      ```
      [
          {
              "id": 9,
              "title": "New Task",
              "description": "This is a test description",
              "status": "New",
              "due_date": "2025-04-27T13:30:00.000Z",
              "isDeleted": 0,
              "created_on": "2025-04-27T21:10:32.000Z",
              "updated_on": "2025-04-27T21:10:32.000Z"
          }
      ]
      ```
- Error Response (If task not found)
  - Status: 404 Not Found
  - Body:
        ```
        {
            "message": "Task not found"
        }
        ```

**4. Update a Task**
  - Endpoint: `POST /api/tasks/:id`
  - Description: Updates the details of a specific task by ID.
  - URL Parameters:
      `id` (required) : The ID of the task to update.
  - Request Body:
    ```
      {
          "title" : "New Task", // required
          "description" : "This is a test description", // required
          "status" : "New", // required
          "due_date" : "2025-04-27 14:30:00" // required
      }
    ```
  - Response:
  - Status: 200 OK
      - Body: 
      ```
        {
            "message": "Updated Successfully",
            "data": {
                "id": "9",
                "title": "New Task",
                "description": "This is a test description",
                "status": "New",
                "due_date": "2025-04-27 14:30:00"
            }
        }
      ```
  - Error Response (if task not found):
    - Status: 404 Found
    - Body:
      ```
        {
            "message": "Task not found"
        }
      ```

**5. Delete a Task**
  - Endpoint: `DELETE /api/tasks/:id`
  - Description:  Deletes a specific task by ID.
  - URL Parameters:
      `id` (required) : The ID of the task to delete.
  - Response:
    - Status: 200 OK
    - Body:
      ```
        {
            "message": "Deleted Successfully"
        }
      ```
  - Error Response (if task not found):
    - Status: 404 Found
    - Body:
      ```
        {
            "message": "Task not found"
        }
      ```


