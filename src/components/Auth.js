import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';   
import { useState } from 'react';  

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth,email, password);
        } catch(err) {
            console.error(err);
        } 
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error(err);
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="sign-in-container">
            <p className="big-header">Sign In</p>
            <input  className="input" type="text"     placeholder="Email"    onChange={(e) => setEmail(e.target.value)}/>
            <input  className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="button" onClick={signIn}>Sign In</button>
            <button className='button' onClick={signInWithGoogle}>Sign In with Google</button>
            <button className='button' onClick={logOut}>Sign Out</button>
        </div>
    )
}