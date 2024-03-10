import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ handleEditProfileModal, handleLogout }) => {
  const { currentUser } = useContext(CurrentUserContext);
  // const username = " Terrence Tegegne";
  // const avatar = "";
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar">
        <img
          className="sidebar__avatar-image"
          src={currentUser?.avatar}
          alt={currentUser?.name}
        />
        <h3 className="sidebar__username">{currentUser?.name}</h3>
      </div>
      <div className="sicebar__button-wrapper">
        <button className="sidebar__button" onClick={handleEditProfileModal}>
          Change profile data
        </button>
        <button className="sidebar__button-logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
