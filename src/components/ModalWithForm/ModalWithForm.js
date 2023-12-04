import { useEffect, useRef } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={handleSubmit}>
          {children}
          <button className="modal__add-button" type="submit">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
