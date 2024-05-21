import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TableViewIcon from '@mui/icons-material/TableView';
import TableRowsIcon from '@mui/icons-material/TableRows';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const SideBar = () => {
    const [isCollapsed, setisCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [broken, setBroken] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                height: "100%",
            }}
        >
            <Sidebar
                collapsed={isCollapsed}
                toggled={toggled}
                onBackdropClick={() => setToggled(false)}
                onBreakPoint={setBroken}
                breakPoint="md"
                style={{ height: "100%", backgroundColor: "black" }}

            >
                <div
                    style={{ display: "flex", flexDirection: "column", height: "100%" }}
                >
                    <div style={{ flex: 1, marginBottom: "32px" }}>
                        <Menu iconShape="square">
                            {/* LOGO */}
                            <MenuItem
                                onClick={() => setisCollapsed(!isCollapsed)}
                                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                                style={{
                                    margin: "10px 0 20px 0",
                                }}
                            >
                                {!isCollapsed && (
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        ml="15px"
                                    >
                                        <Typography>MERN STACK</Typography>
                                        <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                                            <MenuOutlinedIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </MenuItem>
                            {!isCollapsed && (
                                <Box mb="25px">
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <img
                                            alt="profile-user"
                                            width="80px"
                                            height="80px"
                                            src="/user_profile.png"
                                            style={{ cursor: "pointer", borderRadius: "50%" }}
                                        />
                                    </Box>
                                    <Box textAlign="center">
                                        <Typography sx={{ m: "10px 0 0 0" }}>Developer</Typography>
                                    </Box>
                                </Box>
                            )}

                            <Link to="/admin/home" className="menu-bars">
                                <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                            </Link>

                            <SubMenu icon={<TableViewIcon />} label="Table">
                                <Link to={"/admin/table/products"} className="menu-bars">
                                    <MenuItem icon={<TableRowsIcon />}>
                                        {" "}
                                        Products
                                    </MenuItem>
                                </Link>
                            </SubMenu>

                            <SubMenu label="Manage" icon={<PeopleIcon />}>
                                <Link to={"/admin/manage-admin"} className="menu-bars">
                                    <MenuItem icon={<AdminPanelSettingsIcon/>}>Admin</MenuItem>
                                </Link>
                                <Link to={"/admin/manage-user"} className="menu-bars">
                                    <MenuItem icon={<PersonIcon/>}>User</MenuItem>
                                </Link>
                            </SubMenu>
                        </Menu>

                        <hr />

                        <Menu>
                            <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </Sidebar>
            <main>
                <div style={{ padding: "16px 2px ", color: "#44596e" }}>
                    <div style={{ marginBottom: "16px" }}>
                        {broken && (
                            <IconButton onClick={() => setToggled(!toggled)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
export default SideBar;