class Task {
    constructor(description, priority) {
      this.description = description;
      this.priority = priority;
      this.completed = false;
    }
    
    markCompleted() {
      this.completed = true;
    }
    
    markIncomplete() {
      this.completed = false;
    }
    
    toString() {
      return `${this.description} (Priority: ${this.priority}, Completed: ${this.completed ? 'Yes' : 'No'})`;
    }
  }
  
  const tasks = [];
  
  function addTask(description, priority) {
    const task = new Task(description, priority);
    tasks.push(task);
  }
  
  function removeTask(description) {
    const index = tasks.findIndex(task => task.description === description);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  }
  
  function displayTasks() {
    console.log("To-Do List:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.toString()}`);
    });
  }
  
  function sortTasksByPriority() {
    tasks.sort((a, b) => a.priority - b.priority);
  }
  
  while (true) {
    console.log("Options:");
    console.log("1. Add task");
    console.log("2. Remove task");
    console.log("3. Mark task as completed");
    console.log("4. Display tasks");
    console.log("5. Sort tasks by priority");
    console.log("6. Exit");
    
    const choice = prompt("Choose an option:");
  
    switch (choice) {
      case "1":
        const description = prompt("Enter a task:");
        const priority = parseInt(prompt("Enter priority (1 is highest, 10 is lowest):"));
        addTask(description, priority);
        break;
      case "2":
        const taskToRemove = prompt("Enter the task to remove:");
        removeTask(taskToRemove);
        break;
      case "3":
        const taskToComplete = prompt("Enter the task to mark as completed:");
        const task = tasks.find(task => task.description === taskToComplete);
        if (task) {
          task.markCompleted();
        } else {
          console.log("Task not found.");
        }
        break;
      case "4":
        displayTasks();
        break;
      case "5":
        sortTasksByPriority();
        break;
      case "6":
        process.exit(0);
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
  