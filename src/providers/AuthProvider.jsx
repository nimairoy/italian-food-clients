import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();
const gitHubAuth = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuth);
    }

    // sign in with github
    const signInWithGithub = () => {
        return signInWithPopup(auth, gitHubAuth);
    }

    //create new user with email password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user with email and password
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //handle on auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('On Auth State Changed ', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = {
        user,
        createUser,
        logInUser,
        logOut,
        loading,
        signInWithGoogle,
        signInWithGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;