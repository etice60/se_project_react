import "./WeatherCard.css";
import { weatherOptions } from "../../utils/contants.js";

const WeatherCard = ({ day, type, temperatureString = "" }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{temperatureString}</div>
      <img
        src={imageSrcUrl}
        className="weather_image"
        alt={`the weather type: ${type}`}
      />
    </section>
  );
};

export default WeatherCard;
