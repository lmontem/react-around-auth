import React from "react";


function InfoToolTip(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_display' : ''}`}>
        <div className='popup__container'>
        <button className= 'popup__close-btn' aria-label= 'close popup button' type='button' onClick={props.onClose}></button>
        <img className= 'info__image' src= '' alt= 'success/fail icon' />
        <p className= 'info__message'>{props.message}</p>
        </div>
        </div>
    )
}

export default InfoToolTip;