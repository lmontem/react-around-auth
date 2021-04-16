import React, { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import * as auth from '../utils/Auth';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        }

        auth.authorize(email, password)
            .then(data => {
                if (!data) {
                    setMessage('Something went wrong')
                }
                if (data.jwt) {
                    setEmail('')
                    setPassword('')
                    setMessage('')

                    props.handleLogin()
                    history.push('/')//where does this lead to?
                }
            })
    }




    return (
        <div className="login" onSubmit={handleSubmit}>
            <p className="login__welcome">
                Log in
            </p>
            <p className='login__error'>
                {message}
            </p>
            <form className="login__form">
                <input className="login__input" required name="email" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                />

                <input className="login__input" required name="password" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }}
                />
                <button type="submit" className="login__btn">
                    Log in
                </button>

            </form>
            <p className="login__signup">Not a member yet?
                    <Link to="/signup" className="signup__link">
                    Sign up here!
              </Link></p>

        </div>
    );

}


export default withRouter(Login);
