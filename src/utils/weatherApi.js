import { latitude, longitude, APIkey } from "./contants";

export const getForestWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey} `
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else Promise.reject(`Error: ${res.status}`);
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  console.log(Math.ceil(temperature));
  return Math.ceil(temperature);
};

export const parseCityData = (data) => {
  const city = data && data.name;
  return city;
};
