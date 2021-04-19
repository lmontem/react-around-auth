import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        (
            <header className="header">
                <img className="logo" src={logo} alt="around the U.S. logo" />
                <div className="header__nav">
                <p className="header_email">{props.userEmail}</p>               
                <Link to={props.link} className="header__link" onClick={props.handleSignOut}>
                    {props.text} 
                </Link>
                </div>
                
            </header>
        )
    )
}

export default Header;