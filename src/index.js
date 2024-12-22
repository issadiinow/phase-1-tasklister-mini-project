// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add submit event listener to the form
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;

    // Create new task item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;
    taskItem.className = `${priority}-priority`;

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";

    // Add delete functionality
    deleteButton.addEventListener("click", function () {
      taskItem.remove();
    });

    // Append button to task item
    taskItem.appendChild(deleteButton);

    // Append task item to the list
    taskList.appendChild(taskItem);

    // Clear form inputs
    form.reset();
  });
});
