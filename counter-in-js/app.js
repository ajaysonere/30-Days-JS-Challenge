let countNumber = document.querySelector("#count-number");
let incrementBtn = document.querySelector("#increment");
let decrementBtn = document.querySelector("#decrement");

let count = 0;

incrementBtn.addEventListener("click" , () => {
    count++;
    countNumber.innerHTML = count;
});

decrementBtn.addEventListener("click" , ()=> {
    if(count > 0) count--;
    countNumber.innerHTML = count;
})