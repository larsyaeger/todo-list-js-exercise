
const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function()  {
      console.log(`${this.title} has${this.complete ? '' : ' not'} been completed`);
    },
    markCompleted: function()  {
      this.complete = true;
    },
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }



// DRIVER CODE BELOW
const task1 = newTask(`Clean cat litter`, `Take the poop out the litter box`);
const task2 = newTask(`Do laundry`, `emoji`);
const tasks = [task1, task2];


task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed


