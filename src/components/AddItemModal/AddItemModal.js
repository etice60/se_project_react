import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const AddItemModal = ({ handleCloseModal, isOpen, onAddItem, isLoading }) => {
  const { values, handleChange, setValues } = useForm({});

  const [weather, setWeatherType] = useState("");

  const handleWeatherChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = () => {
    console.log(values);
    onAddItem(values);
  };

  // const handleSubmit = (e) => {
  //   onAddItem({ name, imageUrl, weather });
  // };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="300"
          placeholder="Name"
          value={values.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Image
        <input
          className="modal__input"
          type="url"
          name="imageUrl"
          minLength="1"
          maxLength="300"
          placeholder="Image URL"
          value={values.imageUrl || ""}
          onChange={handleChange}
        />
      </label>
      <p className="modal__label_header">Select the weather type:</p>
      <div>
        <div className="modal__label_container">
          <label className="modal__label_radio">
            <input
              className="modal__input_radio"
              type="radio"
              id="hot"
              value="hot"
              name="weather"
              onChange={handleChange}
            />
            <span>Hot</span>
          </label>
        </div>
        <div className="modal__label_container">
          <label className="modal__label_radio">
            <input
              className="modal__input_radio"
              type="radio"
              id="warm"
              value="warm"
              name="weather"
              onChange={handleChange}
            />
            <span>Warm</span>
          </label>
        </div>
        <div className="modal__label_container">
          <label className="modal__label_radio">
            <input
              className="modal__input_radio"
              type="radio"
              id="cold"
              value="cold"
              name="weather"
              onChange={handleChange}
            />
            <span>Cold</span>
          </label>
        </div>
        <button className="modal__button" type="submit">
          {isLoading ? "Adding..." : "Add garment"}{" "}
        </button>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
