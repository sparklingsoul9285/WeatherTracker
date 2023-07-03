const apiKey = '7f08a57f4ef4f9ce58e3fffd2c0c5009';

document.getElementById("getWeatherBtn").addEventListener("click",getWeather);

function getWeather(){
    const location = document.getElementById("locationInput").value;
    if(location === ""){
        alert("Please enter a location");
        return;
    } 

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error(error));
}

function displayWeather(data){
    const weatherDisplay = document.getElementById("weatherDisplay");
    weatherDisplay.innerHTML = `
    <h1>${data.name}</h1>
    <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
    <p>Weather: ${data.weather[0].description}</p>`;
}