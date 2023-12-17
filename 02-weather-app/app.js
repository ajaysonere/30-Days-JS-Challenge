


const apiKey = "bafbf73e3cf2c65bf4b6250e81133948" ;

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";


const cityName = document.querySelector(".btn").addEventListener("click" , async () => {
   const weatherIcon = document.querySelector(".weather-icon");
   const cityName = document.querySelector(".cityName").value;
   const response = await fetch(url+`&appid=${apiKey}`+`&q=${cityName}`);

   if(response.status == 404 ){
      document.querySelector(".weather").style.display = "none";
      document.querySelector(".error").style.display = "block";
   }else {

   const data = await response.json();
   document.querySelector(".city-name").innerHTML = data.name;
   document.querySelector(".temp").innerHTML =
     Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity;
   document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

   if (data.weather[0].main == "Clear") {
     weatherIcon.src = "./assets/clear.png";
   } else if (data.weather[0].main == "Clouds") {
     weatherIcon.src = "./assets/clouds.png";
   } else if (data.weather[0].main == "Drizzle") {
     weatherIcon.src = "./assets/drizzle.png";
   } else if (data.weather[0].main == "Mist") {
     weatherIcon.src = "./assets/mist.png";
   } else if (data.weather[0].main == "Rain") {
     weatherIcon.src = "./assets/rain.png";
   } else if (data.weather[0].main == "Snow") {
     weatherIcon.src = "./assets/snow.png";
   } else {
     weatherIcon.src = "./assets/mist.png";
   }

   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";
   }
});



