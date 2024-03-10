import { Link } from "react-router-dom";
import "./Header.css";
import headerlogo from "../../images/logo.svg";
import avatar from "../../images/Avatar.svg";
import { parseWeatherData } from "../../utils/weatherApi";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  weatherCity,
  onCreateModal,
  isLoggedIn,
  handleRegisterModal,
  handleLoginModal,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const { currentUser } = useContext(CurrentUserContext);

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
        {isLoggedIn ? (
          <>
            <button
              className="header__button"
              type="text"
              onClick={onCreateModal}
            >
              + Add Clothes
            </button>

            <Link className="header__username" to="/profile">
              {currentUser?.name}
            </Link>

            <img
              className="header__avatar"
              src={currentUser?.avatar}
              alt="Profile Image"
            />
          </>
        ) : (
          <>
            <button className="header__buttons" onClick={handleRegisterModal}>
              Sign Up
            </button>
            <button className="header__buttons" onClick={handleLoginModal}>
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
