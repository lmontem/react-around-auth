import logo from '../images/logo.svg';

function Header() {
    return (
        (
            <header className="header">
                <img className="logo" src={logo} alt="around the U.S. logo" />
            </header>
        )
    )
}

export default Header;