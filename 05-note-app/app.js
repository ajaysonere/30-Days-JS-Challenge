const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");

function getDataFromLocalStorage() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

getDataFromLocalStorage();

function saveInLocalStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click" , ()=>{
    let para  = document.createElement("p");
    let img   = document.createElement("img");

    para.className = "input-box";
    para.setAttribute("contenteditable" , "true");
    img.src = "./images/delete.png";
    notesContainer.appendChild(para).appendChild(img);
});


notesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("input-box")) {
    const inputBoxes = document.querySelectorAll(".input-box");
    inputBoxes.forEach((inputBox) => {
      inputBox.addEventListener("keyup", () => {
        saveInLocalStorage();
      });
    });
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveInLocalStorage();
  }
});