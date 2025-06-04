


const town = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const temp  = document.querySelector(".temp");
const wind = document.querySelector(".wind");

const searchBox = document.querySelector(".search input");
const seachBtn = document.querySelector(".search button");

const weatherImg = document.querySelector(".weather-icon");


const apiKey = "b816925aae3449448d2a98ed228551b0" ;
// const apiUrl = "https://pro.openweathermap.org/data/2.5/forecast/climate?q=London&units=metric";


// async function checkWeather(){
//     const response = await fetch (apiUrl + `&appid=${apiKey}`);
//     var data     = await response.json() ;

//     console.log(data) ;
// }

// checkWeather() ;

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    try{
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
         console.log(response.status)
       
        var data = await response.json();
        console.log(data);
    }
      catch(error){
            console.log("error messe " , error.message);
      }


    //   !<< display the data on scrren 
      town.innerHTML = data.name ;
      humidity.innerHTML = data.main.humidity + "%";
      temp.innerHTML  = Math.round(  data.main.temp )+ '°c' ;
      wind.innerHTML = data.wind.speed  + ' km/h';
  
     if(data.weather[0].main == "Clear"){
        weatherImg.src = "https://cdn1.iconfinder.com/data/icons/smashicons-weather-flat/60/68_-_Sunny_Flat-1024.png";
     }
    else if(data.weather[0].main == "Rain"){
        weatherImg.src = "https://cdn3.iconfinder.com/data/icons/weather-free-1/32/Weather_Free_Filled_Outline_thunder-rain-weather-cloud-1024.png";
     }
    else if(data.weather[0].main == "Clouds"){
        weatherImg.src = "https://cdn-icons-png.flaticon.com/512/4834/4834559.png";
     }
    else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-7096832-5753008.png";
     }
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "https://cdn0.iconfinder.com/data/icons/weather-539/64/Artboard_14-512.png";
     }


}

seachBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})

