const inputBox = document.getElementById("todoInput");
const listContainer = document.getElementById("newTask");

function addTask() {
    if (inputBox.value === "") {
        alert("Input box must be filled.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }

    inputBox.value = "";
}