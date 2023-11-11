import { defaultClothingItems } from "../../utils/contants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherTemp, onSelectedCard, weatherUnit }) {
  const weatherType = () => {
    console.log(weatherTemp);
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  };

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType();
  });

  const temperatureString = weatherType();

  return (
    <main className="main">
      <WeatherCard
        day={false}
        type="clearnight"
        temperatureString={`${weatherTemp}° ${weatherUnit}`}
      />
      <section className="card_section" id="card-section">
        Today is {`${weatherTemp}° ${weatherUnit}`} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectedCard={onSelectedCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
