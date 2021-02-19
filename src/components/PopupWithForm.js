function PopupWithForm(props) {
    return (
        <div className={`popup popup__type_${props.name} ${props.isOpen ? "popup__opened" : ""}`}>
            <div className="popup__box">
                <button className="popup__close-btn" type="button" aria-label="Close" onClick={props.onClose}></button>
                <div className="popup__container">
                    <h3 className="popup__title">{props.title}</h3>
                    <form className="popup__form" name={props.name}>
                        {props.children}
                        {/* <label className="popup__label">
                <input className="popup__input popup__input_type_name" id="name-input" type="text" name="name"
                    placeholder="name" required minLength="2" maxLength="40" />
                <span className="popup__input-error" id="name-input-error"></span>
            </label>
            <label className="popup__label">
                <input className="popup__input popup__input_type_about" id="about-input" type="text"
                    name="about" placeholder="about me" required minLength="2" maxLength="200" />
                <span className="popup__input-error" id="about-input-error"></span>
</label>*/}
                        <button className="popup__save-btn" type="submit" aria-label="Save"></button>
                    </form>
                </div>

            </div>
        </div>)

}

export default PopupWithForm;