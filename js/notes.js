const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox");

// Storing the html-data & inner-text
const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};
// Showing the stored the notes
const showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};
showNotes();

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "inputBox";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "../img/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage();
});

// Delete Notes
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".inputBox");
    notes.forEach(function(nt){
      nt.onKeyup = () => {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
