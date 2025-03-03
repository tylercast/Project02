document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
    let tasks = [];

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.classList.add("list-group-item");
            if (task.status === "completed") {
                taskItem.classList.add("completed");
            }
            taskItem.innerHTML = `
                <span>${task.title} - <strong>${task.priority}</strong> - <em>${task.status}</em></span>
                <div>
                    <button class="btn btn-success btn-sm" onclick="markComplete(${index})">Complete</button>
                    <button class="btn btn-danger btn-sm" onclick="removeTask(${index})">Remove</button>
                </div>
            `;
            taskList.appendChild(taskItem);
        });
    }

    // Function to add task
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const title = document.getElementById("taskTitle").value;
        const priority = document.getElementById("taskPriority").value;
        const status = document.querySelector('input[name="taskStatus"]:checked').value;

        tasks.push({ title, priority, status });
        renderTasks();

        taskForm.reset();
    });

    // Function to mark task as complete
    window.markComplete = (index) => {
        tasks[index].status = "completed";
        renderTasks();
    };

    // Function to remove task
    window.removeTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };
});
