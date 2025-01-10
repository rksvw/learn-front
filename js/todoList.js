const inputBox = document.getElementById("todoInput");
const listContainer = document.getElementById("newTask");

function addTask() {
    if (inputBox.value === "") {
        alert("Input box must be filled.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Creating the ( X ) sign to remove the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
}