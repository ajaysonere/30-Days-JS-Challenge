const quote = document.querySelector(".quote");
const authorName = document.querySelector(".author-name");
const generateQuote = document.querySelector(".gen-new-quote");

const apiUrl = "https://api.quotable.io/random";

async function getNewQuote(url){
    const response = await fetch(url);
    const data  = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    authorName.innerHTML =  data.author;
}

generateQuote.addEventListener("click" , () => {
    getNewQuote(apiUrl);
});