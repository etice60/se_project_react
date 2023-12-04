import "./WeatherCard.css";
import { weatherOptions } from "../../utils/contants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({ day, type, temperatureString }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });
  console.log(temperatureString, currentTemperatureUnit);

  const imageSrcUrl = weatherOption.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {temperatureString}
        {currentTemperatureUnit}
      </div>
      <img
        src={imageSrcUrl}
        className="weather_image"
        alt={`the weather type: ${type}`}
      />
    </section>
  );
};

export default WeatherCard;
