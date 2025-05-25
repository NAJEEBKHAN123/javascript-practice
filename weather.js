// ✅ What You Should Do Next (After JavaScript Basics):
// 1. Learn the DOM + Build Real Projects
// You touched on the DOM — now go deeper and build real interactive projects using HTML + CSS + JavaScript.

// 🔧 Practice Projects:

// Weather App using OpenWeatherMap API

// let res = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f8ab698e9d5080de03c48e2b76897510`

const apiKey = "f8ab698e9d5080de03c48e2b76897510";

async function getWeather() {
  let city = document.getElementById("cityInput").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new error("City not found");
    }

    let data = await response.json();

    let weatherDiv = document.getElementById("weather");
    let name = data.name;
    let temperature = data.main.temp;
    let description = data.weather[0].description;
    let icon = data.weather[0].icon;

    weatherDiv.innerHTML = `
       <h1>${description.toUpperCase()} </h1>
       <h2>${name} </div>
       <img src="https://openweathermap.org/img/wn/${icon}@2x.png"  />
       <p><strong>${temperature}°C</strong></p>
      `;
  } catch (error) {
    document.getElementById(
      "weather"
    ).innerHTML = `<p style="color: red">${error.message}</p>`;
  }
}
