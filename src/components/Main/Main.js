import { defaultClothingItems } from "../../utils/contants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { weatherType } from "../../utils/weatherApi";

function Main({
  weatherTemp,
  onSelectedCard,
  clothingItems,
  isLoggedIn,
  onCardLike,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const currentWeatherType = weatherType(temp, currentTemperatureUnit);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather?.toLowerCase() === currentWeatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={false}
        type="clearnight"
        temperatureString={`${temp}°`}
      />
      <section className="card__section" id="card-section">
        Today is {`${temp}° ${currentTemperatureUnit}`} / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard
              item={item}
              onSelectedCard={onSelectedCard}
              key={item._id}
              isLoggedIn={isLoggedIn}
              onCardLike={onCardLike}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
