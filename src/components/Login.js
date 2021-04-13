import React from "react";
import { Link, useState, useHistory } from "react-router-dom";


function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    function handleSubmit(e) {
        e.preventDefault();
        if (!this.state.username || !this.state.password) {
            return;
        }

        return (
            <div className="login">
                <p className="login__welcome">
                    Please sign in or register.
            </p>
                <form onSubmit={handleSubmit} className="login__form">
                    <label for="username">Username:</label>
                    <input id="username" required name="username" type="text" value={username} onChange={e => setUsername(e.target.value)}
                    />
                    <label for="password">Password:</label>
                    <input id="password" required name="password" type="password" value={password} onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login__button-container">
                        <button type="submit" className="login__link">
                            Log in
                </button>
                    </div>
                </form>

                <div className="login__signup">
                    <p>Not a member yet?</p>
                    <Link to="/signup" className="signup__link">
                        Sign up here
              </Link>
                </div>
            </div>
        );

    }


    export default Login;
