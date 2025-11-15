import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {

    const userInfo = {
        email: 'gsfr@gmail.com'
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
        // <AuthContext value={userInfo}>
        //     {children}
        // </AuthContext>
    );
};

export default AuthProvider;