import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Sebastián C'
            }
        });
        
        history.replace(lastPath);
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button className="btn btn-primary" onClick = { () => handleLogin() }>Ingresar</button>
        </div>
    )
}
