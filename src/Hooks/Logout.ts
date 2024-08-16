import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const useLogout = () => {
    const [LoggedIn, SetLoggedIn] = useState<boolean>(() => {
        return localStorage.getItem('LoggedIn') === 'true';
    });

    const navigate = useNavigate();

    const logout = () => {
        SetLoggedIn(false);
        localStorage.setItem('LoggedIn', 'false');
        navigate('/login');
        window.location.reload();
    };

    return logout;
};