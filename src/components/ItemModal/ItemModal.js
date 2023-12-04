import "./ItemModal.css";
import React, { useRef } from "react";

const ItemModal = ({ selectedCard, onClose, handleOpenConfirmationModal }) => {
  const ref = useRef();

  return (
    <div className={`modal`}>
      <div className="modal__content-card">
        <button
          className="image__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__info">
          <p className="modal__card-name">{selectedCard.name}</p>
          <button
            type="text"
            className="modal__delete-button"
            onClick={handleOpenConfirmationModal}
          >
            Delete Item
          </button>
          <p className="modal__card-weather">
            Weather type: {selectedCard.weather}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
