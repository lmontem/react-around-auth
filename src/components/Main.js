function Main() {
   function handleEditAvatarClick(){
document.querySelector('.popup__type_avatar').classList.add('popup__opened')
   }
   function handleEditProfileClick() {
    document.querySelector('.popup__type_edit-profile').classList.add('popup__opened')
   }
   function handleAddPlaceClick() {
    document.querySelector('.popup__type_add-card').classList.add('popup__opened')
   }
    return (
        (
            <main className="content">

                <section className="profile">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src="#" alt="profile" />
                        <button onClick={handleEditAvatarClick} className="profile__edit-avatar" aria-label="edit-avatar" type="button"></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">Cousteau</h1>
                        <button onClick= {handleEditProfileClick} className="profile__edit-btn" type="button" aria-label="Edit profile"></button>
                        <p className="profile__occupation"></p>

                    </div>
                    <button onClick={handleAddPlaceClick} className="profile__add-btn" type="button" aria-label="Add picture"></button>
                </section>
                <section className="cards">
                </section>
            </main>
        )
    )

}

export default Main;