import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisEditPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null)


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

  function closeAllPopups() {
    setisEditPlacePopupOpen(false)
    setisEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }


  return (
    <body className="body">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleEditPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" button="Редактировать"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" id="popap__input-name" className="popap__input popap__input_type_name" placeholder="Имя" name="name" required minLength="2" maxLength="40" />
        <span className="popap__error popap__input-name-error"></span>
        <input type="text" id="popap__input-profession" className="popap__input popap__input_type_profession" placeholder="О себе" name="about" required minLength="2" maxLength="200" />
        <span className="popap__error popap__input-profession-error"></span>
      </PopupWithForm>
      <PopupWithForm name="place" title="Новое место" button="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" id="popap__input-place" className="popap__input popap__input_type_place-name popap__input_type_new-place" value="" name="name" placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popap__error popap__input-place-error"></span>
        <input type="url" id="popap__input-link" className="popap__input popap__input_type_link popap__input_type_new-link" value="" name="link" placeholder="Ссылка на картинку" required />
        <span className="popap__error popap__input-link-error"></span>
      </PopupWithForm>
      <PopupWithForm name="delete-photo" title="Вы уверены?" button="Да" />
      <PopupWithForm name="change-avatar" title="Обновить аватар" button="Создать"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url" id="popap__input-avatar" className="popap__input popap__input_type_link popap__input_type_new-link" value="" name="avatar" placeholder="Ссылка на картинку" required />
        <span className="popap__error popap__input-avatar-error"></span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </body>
  );
}

export default App;
