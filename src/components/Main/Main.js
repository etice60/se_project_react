import { defaultClothingItems } from "../../utils/contants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { weatherType } from "../../utils/weatherApi";

function Main({ weatherTemp, onSelectedCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  // console.log("defaultClothingItems", defaultClothingItems);

  const currentWeatherType = weatherType(temp, currentTemperatureUnit);
  // console.log("currentWeatherType", currentWeatherType);

  const filteredCards = clothingItems.filter((clothingItem) => {
    return clothingItem.weather.toLowerCase() === currentWeatherType;
  });
  // console.log("filteredCards", filteredCards);

  return (
    <main className="main">
      <WeatherCard
        day={false}
        type="clearnight"
        temperatureString={`${temp}°`}
      />
      <section className="card_section" id="card-section">
        Today is {`${temp}° ${currentTemperatureUnit}`} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard
              item={item}
              onSelectedCard={onSelectedCard}
              key={item._id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
