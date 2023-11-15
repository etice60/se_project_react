import "./Header.css";
import headerlogo from "../../images/logo.svg";
import avatar from "../../images/Avatar.svg";
import { parseWeatherData } from "../../utils/weatherApi";

const Header = ({ weatherCity, onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const username = "Terrence Tegegne";

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={headerlogo} alt="logo" />
        </div>
        <div>
          {currentDate}, {weatherCity}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <div className="header__username">{username}</div>
        <div>
          <img src={avatar} alt={`avatar of ${username}`} />
        </div>
      </div>
    </header>
  );
};

export default Header;
