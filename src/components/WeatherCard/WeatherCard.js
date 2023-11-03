import "./WeatherCard.css";

const weatherOptions = [
  { url: require("../Images/Day/Sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../Images/Day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../Images/Day/Fog.svg").default, day: true, type: "fog" },
  { url: require("../Images/Day/Rain.svg").default, day: true, type: "rain" },
  { url: require("../Images/Day/Snow.svg").default, day: true, type: "snow" },
  { url: require("../Images/Day/Storm.svg").default, day: true, type: "storm" },
  {
    url: require("../Images/Night/CloudyNight.svg").default,
    day: false,
    type: "cloudynight",
  },
  {
    url: require("../Images/Night/ClearNight.svg").default,
    day: false,
    type: "clearnight",
  },
  {
    url: require("../Images/Night/FoggyNight.svg").default,
    day: false,
    type: "foggynight",
  },
  {
    url: require("../Images/Night/RainyNight.svg").default,
    day: false,
    type: "rainynight",
  },
  {
    url: require("../Images/Night/SnowyNight.svg").default,
    day: false,
    type: "snowynight",
  },
  {
    url: require("../Images/Night/StormyNight.svg").default,
    day: false,
    type: "stormynight",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
