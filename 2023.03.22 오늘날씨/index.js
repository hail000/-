let where = "";
const key = "d4a54c527f61d7cfa6447e67bb42f444";
const button = document.querySelector("#where_button");
const container = document.querySelector(".container");

document.getElementById("where_text").addEventListener("input", (event) => {
  where = event.target.value;
});

button.addEventListener("click", async () => {
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${where}&appid=${key}`;
  let response = await fetch(weather_url);
  let data = await response.json();
  let temperature_273 = (data.main.temp -273.15).toFixed(2);
  document.querySelector(".temperature").innerHTML = `${temperature_273}`;
  document.querySelector(".description").innerHTML = `${data.weather[0].description}`;
  document.querySelector(".humidity span").innerHTML = `${data.main.humidity}`;
  document.querySelector(".wind span").innerHTML = `${data.wind.speed}`;
  container.style.height = `500px`;
});

