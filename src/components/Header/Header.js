import { Link } from "react-router-dom";
import "./Header.css";
import headerlogo from "../../images/logo.svg";
import avatar from "../../images/Avatar.svg";
import { parseWeatherData } from "../../utils/weatherApi";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

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
          <Link to="/">
            <img src={headerlogo} alt="logo" />
          </Link>
        </div>
        <div>
          {currentDate}, {weatherCity}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <Link className="header__username" to="/profile">
          {username}
        </Link>
        <div>
          <img src={avatar} alt={`avatar of ${username}`} />
        </div>
      </div>
    </header>
  );
};

export default Header;
