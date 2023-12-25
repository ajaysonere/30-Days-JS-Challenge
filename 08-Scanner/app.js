const inputValue = document.querySelector("#input-value");
const btn = document.querySelector("#btn");
const imgContainer = document.querySelector("#img-container");
let count = 0;


function getImage(){
   const img = document.createElement("img");
   img.id="qr";
   img.src = "https://api.qrserver.com/v1/create-qr-code?size=150*150&data="+inputValue.value;
   img.style.cssText="margin:2rem 0;"
   imgContainer.appendChild(img);
   count++;
}

btn.addEventListener("click" , ()=> {
   if(count >= 1){
      const img = document.querySelector("#qr");
      img.parentNode.removeChild(img);
   }
   getImage();
});