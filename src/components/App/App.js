import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import {
  getForestWeather,
  parseWeatherData,
  parseCityData,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  addItems,
  getItems,
  deleteItems,
  updateProfile,
} from "../../utils/api";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { processServerResponse } from "../../utils/utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as auth from "../../utils/auth";
import * as api from "../../utils/api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const weatherTemp = 65;
  const weatherUnit = "F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [deleteCard, setDeleteCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleRegisterModal = () => {
    setActiveModal("registerModal");
  };

  const handleEditProfileModal = () => {
    setActiveModal("profileModal");
  };

  const handleLoginModal = () => {
    setActiveModal("loginModal");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(handleCloseModal)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    addItems({ name, imageUrl, weather }).then(({ data }) => {
      setClothingItems([data, ...clothingItems]);
      handleCloseModal();
    });
  };

  const handleOpenConfirmationModal = () => {
    setActiveModal("delete");
  };

  const handleCloseConfirmModal = () => {
    setActiveModal("");
  };

  const handleDeleteItem = () => {
    console.log(selectedCard._id);
    setDeleteCard(true);
    deleteItems(selectedCard._id)
      .then(() => {
        const filteredCards = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });

        setClothingItems(filteredCards);
        handleCloseModal();
        handleCloseConfirmModal();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setDeleteCard(false);
      });
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  function handleRegistration({ email, password, name, avatar }) {
    setIsLoading(true);
    auth
      .registration(email, password, name, avatar)
      .then((res) => {
        console.log(res);
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((data) => {
              setCurrentUser(data);
            })
            .finally(() => {
              setIsLoading(false);
            })
            .catch((err) => {
              console.error(err);
            });
        }
        handleLoginModal();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    auth
      .authorization(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth.checkToken(res.token).then((data) => {
            setCurrentUser(data.data);
            setIsLoggedIn(true);
          });
        }
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Login failed", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleEditProfile({ name, avatar }) {
    function makeRequest() {
      return updateProfile(name, avatar).then(({ data }) => {
        setCurrentUser(data);
        return data;
      });
    }
    handleSubmit(makeRequest);
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      localStorage.setItem("jwt", jwt);
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res && res.data) {
            setIsLoggedIn(true);
            setCurrentUser(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  useEffect(() => {
    getForestWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        setCity(parseCityData(data));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((cards) => {
        setClothingItems(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") handleCloseModal();
    };
    function handleOutsideModalClick(evt) {
      if (evt.target.classList.contains("modal")) {
        handleCloseModal();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleOutsideModalClick);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleOutsideModalClick);
    };
  }, [activeModal]);

  const handleCardLike = (id, isLiked) => {
    !isLiked
      ? api
          .addCardLike(id)
          .then(({ data }) => {
            console.log(clothingItems, data);
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? data : c))
            );
          })
          .catch((error) => {
            console.log(error);
          })
      : api
          .removeCardLike(id)
          .then(({ data }) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? data : c))
            );
          })
          .catch((error) => {
            console.log(error);
          });
  };

  const history = useHistory("");
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser }}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            temp={temp}
            handleLoginModal={handleLoginModal}
            handleRegisterModal={handleRegisterModal}
            onSelectedCard={handleSelectedCard}
            isLoggedIn={isLoggedIn}
            weatherCity={city}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectedCard={handleSelectedCard}
                clothingItems={clothingItems}
                isLoggedIn={isLoggedIn}
                onCardLike={handleCardLike}
              />
            </Route>

            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile
                onCreateModal={handleCreateModal}
                clothingItems={clothingItems}
                onSelectedCard={handleSelectedCard}
                isLoggedIn={isLoggedIn}
                onCardLike={handleCardLike}
                handleEditProfileModal={handleEditProfileModal}
                handleLogout={handleLogout}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />

          {activeModal === "profileModal" && (
            <EditProfileModal
              isOpen={activeModal === "create"}
              onClose={handleCloseModal}
              onSubmit={handleEditProfile}
            />
          )}

          {activeModal === "registerModal" && (
            <RegisterModal
              isOpen={true}
              onClose={handleCloseModal}
              handleLoginModal={handleLoginModal}
              handleCreateModal={handleCreateModal}
              onSubmit={handleRegistration}
            ></RegisterModal>
          )}
          {activeModal === "loginModal" && (
            <LoginModal
              isOpen={activeModal === "create"}
              onClose={handleCloseModal}
              handleRegisterModal={handleRegisterModal}
              onSubmit={handleLogin}
            />
          )}
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleOpenConfirmationModal}
              handleOpenConfirmationModal={handleOpenConfirmationModal}
            />
          )}
          {activeModal === "delete" && (
            <DeleteConfirmationModal
              handleDeleteItem={handleDeleteItem}
              handleCloseConfirmModal={handleCloseConfirmModal}
              selectedCard={selectedCard}
            ></DeleteConfirmationModal>
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
