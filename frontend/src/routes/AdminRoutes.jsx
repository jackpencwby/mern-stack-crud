import React from 'react'
import HeaderBar from "../layout/HeaderBar";
import SideBar from "../layout/SideBar";
import { CssBaseline, Box } from "@mui/material";
import { authenticateToken } from '../fetchs/auth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminRoutes.css'

function AdminRoutes({ children }) {

    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    const checkAuthentication = async () => {
        try {
            const response = await authenticateToken();
            const { role } = response.data;
            if (role === "admin") {
                setIsAdmin(true);
            }
            else {
                setIsAdmin(false);
                navigate("/login");
            }
        }
        catch (err) {
            setIsAdmin(false);
            navigate("/login");
        }
    }

    useEffect(() => {
        checkAuthentication();
    });

    return isAdmin && (
        <>
            <CssBaseline />
            <div className="app">
                <SideBar />
                <main className="content">
                    <HeaderBar />
                    <div className="content-body">
                        <Box m="20px">
                            {children}
                        </Box>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AdminRoutes;