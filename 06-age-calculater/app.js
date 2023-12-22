const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let count = 0;

function calculateAge(){
    
    const birthDate  = new Date(userInput.value);

    const d1 = birthDate.getDate();
    const m1 = birthDate.getMonth() + 1;
    const y1 = birthDate.getFullYear();

    const today = new Date();
    
    const d2  = today.getDate();
    const m2  = today.getMonth()+1;
    const y2  = today.getFullYear();
    
    let d3 , m3 , y3 = y2 - y1;

    if(m2 >= m1){
       m3 = m2-m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2-d1;
    }else{
        m3--;
        d3 = daysInMonths(y3 , m3 ) + d2-d1; 
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    console.log("called");

    const showAge = document.createElement("p");
    showAge.id = "result";
    showAge.innerHTML = `You are <span> ${y3} </span> years ,<span> ${m3} </span> months and <span> ${d3} </span> days old `;
    showAge.style.cssText = "font-size: 1.5rem";
    const container  = document.querySelector(".container");
    container.appendChild(showAge); 
    count++;
}


function daysInMonths(year , month){
    return new Date(year , month , 0).getMonth();
}

const calculate = document.querySelector(".calculate");

calculate.addEventListener("click" , ()=> {
    
    if(count >= 1){
        const removeElement = document.getElementById("result"); 
        removeElement.parentNode.removeChild(removeElement);
    }
    calculateAge();
    
});
