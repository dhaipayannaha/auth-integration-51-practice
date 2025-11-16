import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuthStateChanged(auth, (currentUser) => {
    //     if(currentUser){
    //         console.log(currentUser)
    //     }else{
    //         console.log(currentUser)
    //     }
    // })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state', currentUser);
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        createUser,
        signIn
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;