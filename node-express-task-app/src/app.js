const express = require('express');
const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api/users', userRoutes);
app.use('/api', taskRoutes);

app.use(errorHandler);

module.exports = app;