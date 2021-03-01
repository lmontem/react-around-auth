import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';


function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState('');
    const [currentUser,setCurrentUser]= React.useState('');

    React.useEffect(()=>{
        api.getUserInfo()
        .then((userData)=>{
            setCurrentUser(userData);
        })
        .catch(err => console.log("Error: " + err));
    },[])
   

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
    function handleUpdateUser(name, about) {
        api.changeUserInfo({name,about})
        .then(()=>{
            setCurrentUser({
                name,
                about,
                avatar: currentUser.avatar
            })
        })
        .then(()=>closeAllPopups())
        .catch(err => console.log("Error: " + err));
    }
    function handleUpdateAvatar(newAvatar) {
        api.setAvatar(newAvatar)
        .then(()=>{
            setCurrentUser({
                name:currentUser.name,
                about: currentUser.about,
                avatar: newAvatar.avatar
            })
        })
        .then(()=>{closeAllPopups()})
        .catch(err => console.log("Error: " + err));
    }

    return ((
        <>
            <div className="page">
                <CurrentUserContext.Provider value= {currentUser}>
                <Header />
                <Main
                    handleEditProfileClick={handleEditProfileClick}
                    handleEditAvatarClick={handleEditAvatarClick}
                    handleAddPlaceClick={handleAddPlaceClick}
                    handleCardClick={handleCardClick}
                />
                <Footer />
                <EditProfilePopup 
                isOpen={isEditProfilePopupOpen}
                 onClose={closeAllPopups}
                 onUpdateUser={handleUpdateUser} />
                <PopupWithForm
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    name='add-card' title='New Place'
                    >
                    <div>
                        <label className="popup__label"><input className="popup__input popup__input_type_title" id="title-input"
                            type="text" name="name" placeholder="Title" required minLength="2" maxLength="30" />
                            <span className="popup__input-error" id="title-input-error"></span>
                        </label>
                        <label className="popup__label"> <input className="popup__input popup__input_type_image-link"
                            id="image-input" type="url" name="link" placeholder="Image Link" required />
                            <span className="popup__input-error" id="image-input-error"></span>
                        </label>

                    </div>
                    </PopupWithForm>
                    <EditAvatarPopup
                     isOpen={isEditAvatarPopupOpen} 
                    onClose={closeAllPopups} 
                    onUpdateAvatar={handleUpdateAvatar}/>
                
                   
                <ImagePopup
                    isOpen={isImagePopupOpen}
                    selectedCard={selectedCard}
                    onClose={closeAllPopups} />
                    </CurrentUserContext.Provider>
            </div>
        </>
    )
    );
}

export default App;
