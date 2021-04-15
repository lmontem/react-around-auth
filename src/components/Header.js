import logo from '../images/logo.svg';

function Header(props) {
    return (
        (
            <header className="header">
                <img className="logo" src={logo} alt="around the U.S. logo" />
                <div className="header__nav">
                <p className="header_email">{props.userEmail}</p>
                <p className="header__link">{props.link}</p>
                </div>
                
            </header>
        )
    )
}

export default Header;