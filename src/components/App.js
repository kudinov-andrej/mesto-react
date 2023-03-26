import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

function App() {
  return (
    <body class="body">
      <Header/>
      <Main/>
      <Footer/>
      <div class="popap popap_typy_profile">
        <div class="popap__conteiner">
          <button class="popap__button-close" type="button"></button>
          <h2 class="popap__title">Редактировать профиль</h2>
          <form class="popap__form popap__form_type_profile" action="#" name="popap-form" novalidate>
            <input type="text" id="popap__input-name" class="popap__input popap__input_type_name" placeholder="Имя" name="name" required minlength="2" maxlength="40" />
            <span class="popap__error popap__input-name-error"></span>
            <input type="text" id="popap__input-profession" class="popap__input popap__input_type_profession" placeholder="О себе" name="about" required minlength="2" maxlength="200" />
            <span class="popap__error popap__input-profession-error"></span>
            <input type="submit" class="popap__button popap__button_type_save-profile" value="Сохранить" />
          </form>
        </div>
      </div>
      <div class="popap popap_typy_place">
        <div class="popap__conteiner">
          <button class="popap__button-close" type="button"></button>
          <h2 class="popap__title">Новое место</h2>
          <form class="popap__form popap__form_type_new-place" action="#" name="popap-form" novalidate>
            <input type="text" id="popap__input-place" class="popap__input popap__input_type_place-name popap__input_type_new-place" value="" name="name" placeholder="Название" required minlength="2" maxlength="30" />
            <span class="popap__error popap__input-place-error"></span>
            <input type="url" id="popap__input-link" class="popap__input popap__input_type_link popap__input_type_new-link" value="" name="link" placeholder="Ссылка на картинку" required />
            <span class="popap__error popap__input-link-error"></span>
            <input type="submit" class="popap__button popap__button_type_save popap__button_type_disabled" value="Создать" />
          </form>
        </div>
      </div>
      <div class="popap popap_typy_photo">
        <div class="popap__photo-conteiner">
          <button class="popap__button-close" type="button"></button>
          <img class="popap__photo" src="#" alt="#"/>
            <h2 class="popap__photo-name"></h2>
        </div>
      </div>
      <div class="popap popap_typy_delete-photo">
        <div class="popap__conteiner">
          <button class="popap__button-close" type="button"></button>
          <h2 class="popap__title popap__title_typy_delete-photo">Вы уверены?</h2>
          <form class="popap__form popap__form_type_delete-photo" action="#" name="popap-form" novalidate>
            <input type="submit" class="popap__button popap__button_type_delete-photo" value="Да" />
          </form>
        </div>
      </div>
      <div class="popap popap_typy_change-avatar">
        <div class="popap__conteiner">
          <button class="popap__button-close" type="button"></button>
          <h2 class="popap__title">Обновить аватар</h2>
          <form class="popap__form popap__form_type_new-place" action="#" name="popap-form" novalidate>
            <input type="url" id="popap__input-avatar" class="popap__input popap__input_type_link popap__input_type_new-link" value="" name="avatar" placeholder="Ссылка на картинку" required />
            <span class="popap__error popap__input-avatar-error"></span>
            <input type="submit" class="popap__button popap__button_type_save popap__button_type_disabled" value="Создать" />
          </form>
        </div>
      </div>
      <template class="photo-template">
        <article class="photo-plase">
          <button type="button" class="photo-plase__delete-button"></button>
          <img class="photo-plase__image" src="#" alt="Байкал"/>
            <div class="photo-plase__content">
              <h2 class="photo-plase__name"></h2>
              <div class="photo-plase__like-conteiner">
                <button type="button" class="photo-plase__hard"></button>
                <div class="photo-plase__counter-like">1</div>
              </div>
            </div>
        </article>
      </template>
    </body>
  );
}

export default App;
