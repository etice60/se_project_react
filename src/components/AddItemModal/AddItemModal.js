import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, isOpen, onAddItem }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeatherType] = useState("");

  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    onAddItem({ name, imageUrl, weather });
  };

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
          value={name}
          onChange={handleNameChange}
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
          value={imageUrl}
          onChange={handleUrlChange}
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
              name="option"
              onChange={handleWeatherChange}
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
              name="option"
              onChange={handleWeatherChange}
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
              name="option"
              onChange={handleWeatherChange}
            />
            <span>Cold</span>
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
