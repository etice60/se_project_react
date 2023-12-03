import { latitude, longitude, APIkey } from "./contants";
import { processServerResponse } from "./utils";

export const getForestWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey} `
  ).then(processServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  weather.city = data.name;
  weather.type = weatherType(weather.temperature);
  return weather;
};

export const parseCityData = (data) => {
  const city = data && data.name;
  return city;
};

export const weatherType = (temp, currentTemperateUnit) => {
  if (currentTemperateUnit === "C") {
    temp = Math.round((temp * 9) / 5 + 32);
  }
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66 && temp <= 85) {
    return "warm";
  } else if (temp <= 65) {
    return "cold";
  }
};
