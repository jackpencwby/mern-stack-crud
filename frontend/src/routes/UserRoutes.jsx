import React from 'react'
import { authenticateToken } from '../fetchs/auth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserRoutes({ children }) {

    const [isUser, setIsUser] = useState(false);
    const navigate = useNavigate();

    const checkAuthentication = async () => {
        try {
            const response = await authenticateToken();
            const { role } = response.data;
            if (role === "general") {
                setIsUser(true);
            }
            else {
                setIsUser(false);
                navigate("/login");
            }
        }
        catch (err) {
            setIsUser(false);
            navigate("/login");
        }
    }

    useEffect(() => {
        checkAuthentication();
    });

    return isUser && (
        <>
            {children}
        </>
    ) 
}

export default UserRoutes;