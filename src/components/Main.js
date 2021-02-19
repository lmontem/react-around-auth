import React from "react";
import { api } from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        api.getAllInfo()
            .then(([userData, initialCardList]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                return (initialCardList);
            })
            .then((res) => {               
                setCards(res);
            })
            .catch(err => console.log("Error: " + err));
    }, [])

    return (
        (
            <main className="content">

                <section className="profile">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={userAvatar} alt="profile"/>
                        <button onClick={props.handleEditAvatarClick} className="profile__edit-avatar" aria-label="edit-avatar" type="button"></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button onClick={props.handleEditProfileClick} className="profile__edit-btn" type="button" aria-label="Edit profile"></button>
                        <p className="profile__occupation">{userDescription}</p>

                    </div>
                    <button onClick={props.handleAddPlaceClick} className="profile__add-btn" type="button" aria-label="Add picture"></button>
                </section>
                <section className="cards">
                    {cards.map((card) => 
                    <Card card={card} 
                    key = {card._id}
                    onCardClick={() => {props.handleCardClick(card)}}
                    /> 
                )}
                </section>
            </main>
        )
    )

}

export default Main;