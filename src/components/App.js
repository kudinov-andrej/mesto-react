import React from 'react';
import  {useState, useEffect} from 'react'; 
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Card from "../components/Card.js"
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from "../utils/api.js"
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisEditPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true)
  }
  function handleEditPlaceClick() {
    setisEditPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  useEffect(() => {
    Promise.all([api.getCurrentUser(), api.getCards()]).then(([userData, cards]) => {
      setCurrentUser(userData);
      setCards(cards);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  function closeAllPopups() {
    setisEditPlacePopupOpen(false)
    setisEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }

  function handlePopupCloseClick(evt) {
    if (evt.target.classList.contains('popap')) {
      closeAllPopups();
    }
  }

  useEffect(() => {
  if (isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard ) {
    function handleEsc(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups()
      }
    }

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    }
  }
}, [isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, selectedCard]);
  

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  
  if (!isLiked) {
  api.setLike(card._id).then((newCard) => {
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    setCards(newCards);
  });
} else {
  api.deleteLike(card._id).then((newCard) => {
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    setCards(newCards);
  });
}
}


function handleCardDelete(card)  {
  api.deleteCard(card._id).then(() => {
    setCards((cards) => cards.filter((c) => c._id !== card._id && c));
  });
}


  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleEditPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" button="Редактировать"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onCloseClick={handlePopupCloseClick} 
      >
        <input type="text" id="popap__input-name" className="popap__input popap__input_type_name" placeholder="Имя" name="name" required minLength="2" maxLength="40" />
        <span className="popap__error popap__input-name-error"></span>
        <input type="text" id="popap__input-profession" className="popap__input popap__input_type_profession" placeholder="О себе" name="about" required minLength="2" maxLength="200" />
        <span className="popap__error popap__input-profession-error"></span>
      </PopupWithForm>
      <PopupWithForm name="place" title="Новое место" button="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onCloseClick={handlePopupCloseClick} 
      >
        <input type="text" id="popap__input-place" className="popap__input popap__input_type_place-name popap__input_type_new-place" value="" name="name" placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popap__error popap__input-place-error"></span>
        <input type="url" id="popap__input-link" className="popap__input popap__input_type_link popap__input_type_new-link" value="" name="link" placeholder="Ссылка на картинку" required />
        <span className="popap__error popap__input-link-error"></span>
      </PopupWithForm>
      <PopupWithForm name="delete-photo" title="Вы уверены?" button="Да" 
      onCloseClick={handlePopupCloseClick} 
      />
      <PopupWithForm name="change-avatar" title="Обновить аватар" button="Создать"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onCloseClick={handlePopupCloseClick} 
      >
        <input type="url" id="popap__input-avatar" className="popap__input popap__input_type_link popap__input_type_new-link" value="" name="avatar" placeholder="Ссылка на картинку" required />
        <span className="popap__error popap__input-avatar-error"></span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        onCloseClick={handlePopupCloseClick} 
      />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
