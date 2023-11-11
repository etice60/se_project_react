import "./ItemCard.css";

const ItemCard = ({ item, onSelectedCard }) => {
  return (
    <div className="card">
      <img
        src={item.link}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectedCard(item)}
      />
      <div className="card_name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
