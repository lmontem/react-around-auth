function PopupWithForm(props) {
    return (
        (
            <div className={`popup popup__type_${props.name} ${props.isOpen ? "popup__opened" : ""}`}>
                <div className="popup__box">
                    <button className="popup__close-btn" type="button" aria-label="Close" onClick={props.onClose}></button>
                    <div className="popup__container">
                        <h3 className="popup__title">{props.title}</h3>
                        <form className="popup__form" name={props.name}>
                            {props.children}
                            <button className="popup__save-btn" type="submit" aria-label="Save">Save</button>
                        </form>
                    </div>

                </div>
            </div>)
    )
}

export default PopupWithForm;