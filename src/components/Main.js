import React from "react";
import { api } from '../utils/api.js';
import Card from './Card.js';
import  CurrentUserContext  from "../contexts/CurrentUserContext.js";

function Main(props) {

const currentUser = React.useContext(CurrentUserContext);
    
    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        api.getAllInfo()
            .then(([userData, initialCardList]) => {
              
                return (initialCardList);
            })
            .then((res) => {
                setCards(res);
            })
            .catch(err => console.log("Error: " + err));
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard)=>{
               const newCards= cards.map((c)=> c._id === card._id ? newCard : c);
            setCards(newCards);
        })
    }

    return (
        (
            <main className="content">

                <section className="profile">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={currentUser.avatar} alt="profile" />
                        <button onClick={props.handleEditAvatarClick} className="profile__edit-avatar" aria-label="edit-avatar" type="button"></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button onClick={props.handleEditProfileClick} className="profile__edit-btn" type="button" aria-label="Edit profile"></button>
                        <p className="profile__occupation">{currentUser.about}</p>

                    </div>
                    <button onClick={props.handleAddPlaceClick} className="profile__add-btn" type="button" aria-label="Add picture"></button>
                </section>
                <section className="cards">
                    {cards.map((card) => (
                        <Card card={card}
                            key={card._id}
                            onCardClick={() => { props.handleCardClick(card) }}
                            onCardLike={() => { handleCardLike(card) }}
                        />
                    )
                    )}
                </section>
            </main>
        )
    )

}

export default Main;