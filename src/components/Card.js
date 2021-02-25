function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return ((
        <div className="card">
            <button className="card__delete-btn" type="button" aria-label="Delete"></button>
            <div onClick={handleClick} className="card__image" style={{ backgroundImage: `url(${props.card.link})` }}></div>
            <h2 className="card__heading">{props.card.name}</h2>
            <button className="card__like-btn" type="button" aria-label="Like"></button>
            <p className="card__like-count">{props.card.likes.length}</p>
        </div>
    ))
}



export default Card;