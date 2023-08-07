import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';   
import { useState } from 'react';  
import { FaTimes } from 'react-icons/fa';

export const Login = ({ loginState }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth,email, password);
        } catch(err) {
            console.log(err);
        } 
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.log(err);
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.log(err);
        }
    }

    function closePopUp() {
        loginState(false);
    }

    return (
        <div className="log-in">
            <div className='log-in__container'>
                <p className="log-in__title">Log In <FaTimes className='close-btn' onClick={closePopUp}/></p>
                <input  className="input" type="text"     placeholder="Email"    onChange={(e) => setEmail(e.target.value)}/>
                <input  className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button className="button" onClick={signIn}>Log In</button>
                <button className='button' onClick={signInWithGoogle}>Sign In with Google</button>
            </div>
        </div>
    )
}