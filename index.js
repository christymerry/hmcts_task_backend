const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const taskRoutes = require('./routes/task.routes');
require('./db');

app.use(express.json());
app.use(cors())
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});