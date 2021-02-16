import Header from './Header.js';
import Main from "./Main.js";
import Footer from './Footer.js';

function App() {
  return ((
    <>
    <div className="page">
      <Header />
      <Main />
      <Footer />

<div className="popup popup__type_edit-profile">
<div className="popup__box">
    <button className="popup__close-btn" type="button" aria-label="Close"></button>
    <div className="popup__container">
        <h3 className="popup__title">Edit profile</h3>
        <form className="popup__form" name="profile">
            <label className="popup__label">
                <input className="popup__input popup__input_type_name" id="name-input" type="text" name="name"
                    placeholder="name" required minLength="2" maxLength="40" />
                <span className="popup__input-error" id="name-input-error"></span>
            </label>
            <label className="popup__label">
                <input className="popup__input popup__input_type_about" id="about-input" type="text"
                    name="about" placeholder="about me" required minLength="2" maxLength="200" />
                <span className="popup__input-error" id="about-input-error"></span>
            </label>
            <button className="popup__save-btn" type="submit" aria-label="Save"></button>
        </form>
    </div>

</div>
</div>
<div className="popup popup__type_add-card">
<div className="popup__box">
    <button className="popup__close-btn" type="button" aria-label="Close"></button>
    <div className="popup__container">
        <h3 className="popup__title">New Place</h3>
        <form className="popup__form" name="image">

            <label className="popup__label"><input className="popup__input popup__input_type_title" id="title-input"
                    type="text" name="name" placeholder="Title" required minLength="2" maxLength="30" />
                <span className="popup__input-error" id="title-input-error"></span>
            </label>
            <label className="popup__label"> <input className="popup__input popup__input_type_image-link"
                    id="image-input" type="url" name="link" placeholder="Image Link" required />
                <span className="popup__input-error" id="image-input-error"></span>
            </label>
            <button className="popup__save-btn" type="submit" aria-label="Save "></button>
        </form>
    </div>
</div>
</div>
<div className="popup popup__type_avatar">
<div className="popup__box">
    <button className="popup__close-btn" type="button" aria-label="Close"></button>
    <div className="popup__container">
        <h3 className="popup__title">Change profile picture</h3>
        <form className="popup__form" name="avatar">
            <label className="popup__label"><input className="popup__input popup__input_type_avatar-link"
                    id="avatar-input" type="url" name="link" placeholder="Avatar Link" required />
                <span className="popup__input-error" id="avatar-input-error"></span>
            </label>
            <button className="popup__save-btn" type="submit" aria-label="Save "></button>
        </form>
    </div>
</div>
</div>
<div className="popup popup__type_delete">
<div className="popup__box">
    <button className="popup__close-btn" type="button" aria-label="Close"></button>
    <div className="popup__container popup__container_type_delete">
        <h3 className="popup__title">Are you sure?</h3>
        <form className="popup__form">

            <button className="popup__save-btn" type="submit" aria-label="Yes"></button>
        </form>
    </div>
</div>
</div>
<div className="popup popup__type_image">
<div className="popup__image-container">
    <button className="popup__close-btn" type="button" aria-label="Close"></button>
    <figure className="popup__figure">
        <img className="popup__image" src='#' alt='' />
        <figcaption className="popup__image-title"></figcaption>
    </figure>
</div>
</div>
</div>
<template className="card-template">
<div className="card">
<button className="card__delete-btn" type="button" aria-label="Delete"></button>
<div className="card__image"></div>
<h2 className="card__heading"></h2>
<button className="card__like-btn" type="button" aria-label="Like"></button>
<p className="card__like-count"></p>

</div>
</template>

    </>
   ) 
  );
}

export default App;
