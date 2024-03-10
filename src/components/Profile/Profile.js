import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  clothingItems,
  onSelectedCard,
  onCreateModal,
  isLoggedIn,
  onCardLike,
  handleEditProfileModal,
  handleLogout,
}) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar
          handleEditProfileModal={handleEditProfileModal}
          handleLogout={handleLogout}
        />
      </div>
      <div>
        <ClothesSection
          onSelectedCard={onSelectedCard}
          onCreateModal={onCreateModal}
          clothingItems={clothingItems}
          isLoggedIn={isLoggedIn}
          onCardLike={onCardLike}
        />
      </div>
    </div>
  );
};

export default Profile;
