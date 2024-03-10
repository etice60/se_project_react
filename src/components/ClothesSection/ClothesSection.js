import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ClothesSection = ({
  clothingItems,
  onSelectedCard,
  onCreateModal,
  isLoggedIn,
  onCardLike,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const filteredCards = clothingItems.filter((item) => {
    return item.owner === currentUser._id;
  });

  return (
    <section className="clothes__section" id="clothes-section">
      <div className="clothes__section_name-wrapper">
        <p className="clothes__section_name">Your items</p>
        <button
          className="clothes__section_button"
          type="text"
          onClick={onCreateModal}
        >
          + Add New
        </button>
      </div>
      <div className="clothing__section-cards">
        {filteredCards.map((item) => {
          return (
            <ItemCard
              item={item}
              onSelectedCard={onSelectedCard}
              key={item._id}
              isLoggedIn={isLoggedIn}
              onCardLike={onCardLike}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
