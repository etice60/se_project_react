import { useEffect, useRef } from "react";
import "../ModalWithForm/ModalWithForm.css";

const DeleteConfirmationModal = ({
  handleCloseModal,
  handleDeleteItem,
  selectedCard,
  isLoading,
}) => {
  const ref = useRef();

  const handleCancel = () => {
    handleCloseModal();
  };

  return (
    <div className="modal">
      <div className="modal__confirm-content" ref={ref}>
        <div>Are you sure you want to delete this item?</div>
        <div>This action is irreversible.</div>
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseModal}
          alt="close-button"
        ></button>
        <div className="modal__confirm-buttons">
          <button
            className="modal__confirm-button"
            type="button"
            onClick={() => handleDeleteItem(selectedCard._id)}
          >
            {isLoading ? "Deleting..." : "Yes, delete item"}
          </button>
          <button
            className="modal__cancel-button"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteConfirmationModal;
