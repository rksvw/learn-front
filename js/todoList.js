const inputBox = document.getElementById("todoInput");
const listContainer = document.getElementById("newTask");

function addTask() {
    if (inputBox.value === '') {
        alert("Input box must be filled.");
    } else {
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Creating the ( X ) sign to remove the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
}, false);


const saveTask = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();