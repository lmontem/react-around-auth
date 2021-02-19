import React from 'react';
import Header from './Header.js';
import Main from "./Main.js";
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from './PopupWithImage.js';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState('');


    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard(card);

        setImagePopupOpen(true);
    }
    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setImagePopupOpen(false);
        setSelectedCard('');
    }

    return ((
        <>
            <div className="page">
                <Header />
                <Main
                    handleEditProfileClick={handleEditProfileClick}
                    handleEditAvatarClick={handleEditAvatarClick}
                    handleAddPlaceClick={handleAddPlaceClick}
                    handleCardClick={handleCardClick}
                />
                <Footer />
                <PopupWithForm
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    name='edit-profile' title='Edit profile'
                    children={<div>
                        <label className="popup__label">
                            <input className="popup__input popup__input_type_name" id="name-input" type="text" name="name" placeholder="name" required minLength="2" maxLength="40" />
                            <span className="popup__input-error" id="name-input-error">
                            </span>
                        </label>
                        <label className="popup__label">
                            <input className="popup__input popup__input_type_about" id="about-input" type="text" name="about" placeholder="about me" required minLength="2" maxLength="200" />
                            <span className="popup__input-error" id="about-input-error">
                            </span>
                        </label>
                        
                    </div>}
                />
                <PopupWithForm
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    name='add-card' title='New Place'
                    children={<div>
                        <label class="popup__label"><input class="popup__input popup__input_type_title" id="title-input"
                                type="text" name="name" placeholder="Title" required minlength="2" maxlength="30" />
                            <span class="popup__input-error" id="title-input-error"></span>
                        </label>
                        <label class="popup__label"> <input class="popup__input popup__input_type_image-link"
                                id="image-input" type="url" name="link" placeholder="Image Link" required />
                            <span class="popup__input-error" id="image-input-error"></span>
                        </label>
                        
                    </div>} />
                   
                <PopupWithForm
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups} 
                    name='avatar' title='Change profile picture'
                    children={<div>
                        <label class="popup__label"><input class="popup__input popup__input_type_avatar-link"
                                id="avatar-input" type="url" name="link" placeholder="Avatar Link" required />
                            <span class="popup__input-error" id="avatar-input-error"></span>
                        </label>
                        </div>}
                        />
                <PopupWithImage
                    isOpen={isImagePopupOpen}
                    selectedCard={selectedCard}
                    onClose={closeAllPopups} />
            </div>
        </>
    )
    );
}

export default App;
