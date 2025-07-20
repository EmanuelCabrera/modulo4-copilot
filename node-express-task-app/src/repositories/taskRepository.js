const Task = require('../models/taskModel');

class TaskRepository {
  async findAll() {
    return await Task.findAll();
  }

  async findById(id) {
    return await Task.findByPk(id);
  }


  async create(data) {
    return await Task.create({
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      priority: data.priority ?? 'Low',
      status: data.status ?? 'Pending',
    });
  }


  async update(id, data) {
    const task = await Task.findByPk(id);
    if (!task) return null;
    await task.update({
      title: data.title ?? task.title,
      description: data.description ?? task.description,
      dueDate: data.dueDate ?? task.dueDate,
      priority: data.priority ?? task.priority,
      status: data.status ?? task.status,
    });
    return task;
  }

  async delete(id) {
    const task = await Task.findByPk(id);
    if (!task) return false;
    await task.destroy();
    return true;
  }
}

module.exports = new TaskRepository();
