import React, { useState, UseHistory } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as auth from '../utils/Auth.js';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = UseHistory();

    function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords are not the same')
        } else {
            auth.register(username, password, email)
                .then(res => {
                    if (res.statusCode !== 400) {
                        setMessage('')
                        history.push('/signin')
                    } else {
                        setMessage('Something went wrong')
                    }
                })
        }
        //anohter .then to reset form zero out all states
    }


    return (
        <div className="register">
            <p className="register__welcome">
                Please register.
                 </p>
            <form className="register__form">
                <label>
                    Username:
                     </label>
                <input name="username" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <label>
                    Email:
                     </label>
                <input name="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label>
                    Password:
                    </label>
                <input name="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <label>
                    Confirm password:
                     </label>
                <input name="confirmPassword" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
            </form>
            <div className="register__button-container">
                <button onClick={handleSubmit()} className="register__link">Sign up</button>
            </div>
            <div className="register__signin">
                <p>Already a member?</p>
                <Link to="signin" className="register__login-link">Log in here</Link>
            </div>
        </div>
    )
}





export default withRouter(Register);