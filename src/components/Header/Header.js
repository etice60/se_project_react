import "./Header.css";
import headerlogo from "../Images/logo.svg";
import avatar from "../Images/Avatar.svg";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={headerlogo} alt="logo" />
          </div>
          <div>Date</div>
        </div>
        <div className="header__avatar-logo">
          <div>
            <button type="text" onClick={onCreateModal}>
              Add New Clothes
            </button>
          </div>
          <div>Name</div>
          <div>
            <img src={avatar} alt="logo" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
