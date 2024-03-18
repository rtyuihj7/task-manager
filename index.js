// index.js

const fs = require('fs');

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  loadTasks() {
    try {
      const data = fs.readFileSync('tasks.json', 'utf8');
      this.tasks = JSON.parse(data);
      console.log('Tasks loaded successfully.');
    } catch (err) {
      console.error('Error loading tasks:', err);
    }
  }

  saveTasks() {
    try {
      const data = JSON.stringify(this.tasks, null, 2);
      fs.writeFileSync('tasks.json', data);
      console.log('Tasks saved successfully.');
    } catch (err) {
      console.error('Error saving tasks:', err);
    }
  }

  addTask(task) {
    this.tasks.push(task);
    this.saveTasks();
  }

  displayTasks() {
    console.log('Tasks:');
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.name} - ${task.deadline}`);
      console.log(`   Description: ${task.description}`);
      console.log('-------------------------------------');
    });
  }
}

const taskManager = new TaskManager();
taskManager.loadTasks();
taskManager.displayTasks();

// Example: Add a new task
const newTask = {
  name: 'Complete Project Presentation',
  description: 'Prepare slides and practice presentation',
  deadline: '2024-03-15'
};
taskManager.addTask(newTask);
