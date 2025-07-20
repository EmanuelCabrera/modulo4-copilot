
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dueDate: {
    type: DataTypes.STRING, // Puede usarse DataTypes.DATE si prefieres tipo fecha
    allowNull: true,
  },
  priority: {
    type: DataTypes.ENUM('Low', 'Medium', 'High'),
    allowNull: false,
    defaultValue: 'Low',
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Completed'),
    allowNull: false,
    defaultValue: 'Pending',
  },
}, {
  tableName: 'tasks',
  timestamps: false,
});

module.exports = Task;
