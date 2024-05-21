import react, { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { logout } from "../fetchs/auth";
import { useNavigate } from "react-router-dom";

const HeaderBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <Box display="flex" justifyContent="space-between" p={1}>
            {/* search  */}
            <Box display="flex" borderRadius="3px" backgroundColor="#F5EFE7">

            </Box>

            {/* icons */}
            <Box display="flex">
                <IconButton>
                    <img
                        alt="profile-user"
                        width="32px"
                        height="32px"
                        src="/user_profile.png"
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                        onClick={handleMenu}
                    />
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to="#" className="menu-bars">
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                        </Link>
                        <MenuItem onClick={signout}>Logout</MenuItem>
                    </Menu>
                </IconButton>
            </Box>
        </Box>
    );
};

export default HeaderBar;