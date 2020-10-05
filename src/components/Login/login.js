import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import './login.css';
import {auth} from '../../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => {
            alert(error.message)
        })
    }

    const register = (e) => {
        e.preventDefault();
        auth 
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => {
            alert(error.message)
        })
    } 

    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png' />
            </Link>
            <div className='container'>
                <h1>
                    Sign in
                </h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text'value={email} onChange = {e => 
                        setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password'value={password} onChange= {e => setPassword(e.target.value)}/>
                    <button className='login__signinButton' onClick={signIn} type='submit'>Sign in</button>
                </form>
                <p>
                    By signing in you agree to AMAZON FAKE CLONE Conditions of use & sale
                </p>
                <button className='registerButton' onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
