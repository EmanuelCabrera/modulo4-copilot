const taskRepository = require('../repositories/taskRepository');


class TaskService {
  async getAllTasks() {
    return await taskRepository.findAll();
  }

  async getTaskById(id) {
    return await taskRepository.findById(id);
  }

  async createTask(data) {
    return await taskRepository.create(data);
  }

  async updateTask(id, data) {
    return await taskRepository.update(id, data);
  }

  async deleteTask(id) {
    return await taskRepository.delete(id);
  }
}

module.exports = new TaskService();
