import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Spiner  from '../components/Spiner/Spiner';

export const Perfil = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Spiner />
    }

    return(
        isAuthenticated && (
            <div>
                <img src={user.picture} alt="avatar" />
            </div>
    )
    )

}