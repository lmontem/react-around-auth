import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/Api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';


function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    //get initial cards and user info
    React.useEffect(() => {
        api.getAllInfo()
            .then(([userData, initialCardList]) => {
                setCurrentUser(userData);
                return (initialCardList);
            })
            .then((res) => {
                setCards(res);
            })
            .catch(err => console.log("Error: " + err));
    }, [])

    //handle opening of popups
    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }
    function handleDeleteCardClick(card) {
        setSelectedCard(card);
        setDeleteCardPopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
        setImagePopupOpen(true);
    }
    // handle closing of popups
    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setDeleteCardPopupOpen(false);
        setImagePopupOpen(false);
        setSelectedCard({});
    }
    //sends like info to api
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
            .catch(err => console.log("Error: " + err));
    }
    //sends which card was deleting to api
    function handleCardDelete(card) {

        api.removeCard(card._id)
            .then(() => {
                const newCardList = cards.filter((c) => c._id !== card._id);
                setCards(newCardList);
            })
            .then(() => closeAllPopups())
            .catch(err => console.log("Error: " + err));
    }

    //sends update on user info to api
    function handleUpdateUser(name, about) {
        api.changeUserInfo({ name, about })
            .then((userData) => {
                setCurrentUser(userData)
            })
            .then(closeAllPopups)
            .catch(err => console.log("Error: " + err));
    }
    //sends update of user image to api
    function handleUpdateAvatar(newAvatar) {
        api.setAvatar(newAvatar)
            .then((userData) => {
                setCurrentUser(userData)
            })
            .then(closeAllPopups)
            .catch(err => console.log("Error: " + err));
    }
    //sends new card info to api
    function handleAddPlaceSubmit(name, link) {
        api.addCard({ name, link })
            .then((newCard) => {
                setCards([newCard, ...cards]);
            })
            .then(() => { closeAllPopups() })
            .catch(err => console.log("Error: " + err));
    }

    return ((
        <>
            <div className="page">
                <CurrentUserContext.Provider value={currentUser}>
                    <Header />
                    <Main
                        handleEditProfileClick={handleEditProfileClick}
                        handleEditAvatarClick={handleEditAvatarClick}
                        handleAddPlaceClick={handleAddPlaceClick}
                        handleDeleteCardClick={handleDeleteCardClick}
                        handleCardClick={handleCardClick}
                        cards={cards}
                        onCardDelete={(card) => { handleCardDelete(card) }}
                        handleCardDelete={handleCardDelete}
                        onCardLike={(card) => { handleCardLike(card) }}
                        handleCardLike={handleCardLike}
                    />
                    <Footer />
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser} />
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit} />

                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar} />
                    <DeleteCardPopup
                        isOpen={isDeleteCardPopupOpen}
                        selectedCard={selectedCard}
                        onClose={closeAllPopups}
                        onCardDelete={handleCardDelete}
                    />

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
