import "./ItemModal.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({
  selectedCard,
  onClose,
  handleOpenConfirmationModal,
  name,
  ...props
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser?._id;
  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  return (
    <div className={`modal`} name={name} onClose={onClose}>
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
            className={itemDeleteButtonClassName}
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
