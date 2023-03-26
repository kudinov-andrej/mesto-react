import React from 'react';

function Main() {

    const [isCustomCursor, setIsCustomCursor] = React.useState();

  function handleEditAvatarClick() {
    const PopupTupyAvatarProfile = document.querySelector(".popap_typy_change-avatar");
    PopupTupyAvatarProfile.classList.add('popap_opened');
  }

  function handleEditProfileClick() {
    const PopupTupyEditProfile = document.querySelector(".popap_typy_profile");
    PopupTupyEditProfile.classList.add('popap_opened');
  }

  function handleAddPlaceClick() {
    const PopupTupyAddPlace = document.querySelector(".popap_typy_place");
    PopupTupyAddPlace.classList.add('popap_opened');
  }
    return (
        <main class="content">
          <section class="profile">
            <div class="profile__block">
              <button type="button" class="profile__button" onClick={handleEditAvatarClick}>
                <img class="profile__image" src="#" alt="Фото профиля"/>
              </button>
              <div class="profile__content">
                <div class="profile__info">
                  <h1 class="profile__name">Жак Ив Кусто</h1>
                  <button type="button" class="profile__edit-button" onClick={handleEditProfileClick}></button>
                </div>
                <p class="profile__profession">Программист</p>
              </div>
            </div>
            <button type="button" class="profile__add-button" onClick={handleAddPlaceClick}></button>
          </section>
          <section class="plase"></section>
        </main>
    );
  }
  
  export default Main;