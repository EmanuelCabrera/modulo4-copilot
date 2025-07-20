
const express = require('express');
const app = require('./app');
const config = require('./config');
const sequelize = require('./config/sequelize');

const PORT = config.port || 3000;

sequelize.sync()
  .then(() => {
    console.log('Database connected and models synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });