import React, { Button, useState, UseHistory } from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('')
    const history = UseHistory();

    function handleSubmit() {
        e.preventDefault();
        if (password !== confirmPassword) {
            //do something
           return setMessage('Something went wrong')
        }
        if (password === confirmPassword)//{
            //need to make an auth.js
            auth.register(username, password, email)
            .then((res)=>{
                if(!res || res.statusCode === 400){
                    send({message: 'error'})
                }
            }
            .then((res)=>{
                if(res){
                    setMessage(''),
                    ()=>{history.push('/signin');
                }

            }})
            )
        }

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
                    <input name="username" type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                    <label>
                        Email:
                     </label>
                    <input name="email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <label>
                        Password:
                    </label>
                    <input name="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <label>
                        Confirm password:
                     </label>
                    <input name="confirmPassword" type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                </form>
                <div className="register__button-container">
                    <button onClick={handleSubmit} className="register__link">Sign up</button>
                </div>
                <div className="register__signin">
                    <p>Already a member?</p>
                    <Link to="signin" className="register__login-link">Log in here</Link>
                </div>
            </div>
        )
    }


       
  

export default Register;