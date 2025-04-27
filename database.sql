-- Creating Database
CREATE DATABASE IF NOT EXISTS hmcts_task_db;

USE hmcts_task_db;

-- Creating Tasks Table
CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('New', 'InProgress', 'Completed') DEFAULT 'New',
  due_date DATETIME,
  isDeleted BOOLEAN DEFAULT FALSE,
  created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Adding Few Values Into Table
INSERT INTO tasks (title, description, status, due_date) VALUES
(
  'Schedule hearing for case #C12345',
  'Coordinate with both parties and assign a judge for the upcoming hearing.',
  'New',
  '2025-05-01 10:00:00'
),
(
  'Review evidence for case #B98765',
  'Ensure all submitted evidence is correctly uploaded and labeled in the system.',
  'InProgress',
  '2025-04-28 15:00:00'
),
(
  'Send outcome letter to claimant',
  'Generate and post the official outcome letter for tribunal case #T56789.',
  'Completed',
  '2025-04-26 09:30:00'
),
(
  'Verify interpreter availability',
  'Check interpreter availability for upcoming hearings with foreign language requirements.',
  'New',
  '2025-05-03 11:00:00'
);