import { createContext, useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import auth from '../config/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [googleLoginAttempt, setGoogleLoginAttempt] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            if (googleLoginAttempt && user) {
                axios.post('http://localhost:5000/jwt', { email: user?.email }, { withCredentials: true })
                    .then(() => {
                        setGoogleLoginAttempt(false)
                    })
            }
            setLoading(false);
        })
        return () => unsubscribe();

    }, [googleLoginAttempt])

    const signUpEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        setLoading(true);
        axios.post('http://localhost:5000/logout', { email: currentUser.email }, { withCredentials: true })
            .then(res => console.log(res.data))
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = { currentUser, signUpEmailPassword, loginEmailPassword, logoutUser, loading, googleLogin, setLoading, setGoogleLoginAttempt };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: Proptypes.node.isRequired
}

export default AuthProvider;