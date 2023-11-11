import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForestWeather,
  parseWeatherData,
  parseCityData,
} from "../../utils/weatherApi";

function App() {
  const weatherTemp = 65;
  const weatherUnit = "F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForestWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getForestWeather()
      .then((data) => {
        setCity(parseCityData(data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  useEffect(() => {
    function handleOutsideModalClick(evt) {
      if (evt.target.classList.contains("modal")) {
        handleCloseModal();
      }
    }

    document.addEventListener("click", handleOutsideModalClick);
    return () => document.removeEventListener("click", handleOutsideModalClick);
  }, []);

  return (
    <div>
      <Header
        onCreateModal={handleCreateModal}
        temp={temp}
        weatherCity={city}
      />
      <Main
        weatherTemp={temp}
        onSelectedCard={handleSelectedCard}
        weatherUnit={weatherUnit}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label>
            Name
            <input
              className="modal__input"
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              placeholder="Name"
            />
          </label>
          <label>
            Image
            <input
              className="modal__input"
              type="url"
              name="link"
              minLength="1"
              maxLength="30"
              placeholder="Image URL"
            />
          </label>
          <p className="modal__label_header">Select the weather type:</p>
          <div>
            <div className="modal__label_container">
              <input
                className="modal__input_radio"
                type="radio"
                id="hot"
                value="hot"
              />
              <label className="modal__label_radio">Hot</label>
            </div>
            <div className="modal__label_container">
              <input
                className="modal__input_radio"
                type="radio"
                id="warm"
                value="warm"
              />
              <label className="modal__label_radio">Warm</label>
            </div>
            <div className="modal__label_container">
              <input
                className="modal__input_radio"
                type="radio"
                id="cold"
                value="cold"
              />
              <label className="modal__label_radio">Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;