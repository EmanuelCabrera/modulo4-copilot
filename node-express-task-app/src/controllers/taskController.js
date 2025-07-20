const taskService = require('../services/taskService');


exports.getAllTasks = async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};


exports.createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.updateTask = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await taskService.updateTask(id, req.body);
    if (!updated) return res.status(404).json({ message: 'Task not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await taskService.deleteTask(id);
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
