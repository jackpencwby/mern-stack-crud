import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [{action: "เข้าสู่ระบบ", link: "/login"}, {action: "สมัครสมาชิก", link: "/register"}]

function HomePage(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.action} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.action} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MERN STACK CRUD
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Link to={item.link}>
                                <Button key={item.action} sx={{ color: '#fff' }}>
                                    {item.action}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, sint quidem perferendis incidunt aperiam ipsam! Inventore facere, officia quos, sequi, nobis ea recusandae quae magnam vero repellendus quas aspernatur quod?
                    Iure distinctio dolorum laboriosam veritatis necessitatibus aliquam incidunt dolore exercitationem qui cumque temporibus, perferendis beatae esse voluptatibus ipsa reiciendis accusamus? Ducimus provident facere aut quisquam adipisci ratione esse qui sed?
                    Cum ratione corporis veniam necessitatibus. Error fugiat tempore cupiditate amet aspernatur debitis illum quasi, ipsam repellendus, blanditiis voluptate voluptatum dolorem harum velit commodi corrupti quibusdam animi nisi atque nesciunt labore?
                    Error, nam! Autem et modi nostrum, qui, provident inventore dolore cumque corrupti fuga vel in aspernatur ad porro incidunt voluptatibus animi soluta. Eos temporibus, aliquid sit provident accusamus laboriosam commodi!
                    Voluptatem nobis quibusdam reiciendis doloremque? Ut accusamus rem libero voluptatum. A repellendus hic quae fuga officiis, facere, impedit ab eaque perferendis sequi natus eligendi sit aut, accusantium soluta accusamus incidunt.
                    Aperiam, iusto. Temporibus autem id labore natus? Reiciendis ipsa expedita excepturi corrupti doloribus sit quo labore. Fuga non recusandae dolorum nihil culpa. Itaque suscipit, corporis beatae iste veritatis cupiditate debitis!
                    Quis facilis tempora quos iusto earum velit animi deserunt, nulla voluptatem! Unde libero velit molestias, modi provident natus repellat eum dolore maiores saepe vel aperiam soluta iusto quasi excepturi deleniti.
                    Autem doloribus, sint veniam temporibus voluptate sed itaque adipisci ducimus voluptates delectus omnis perferendis eos, natus labore impedit dolores magni quisquam corporis voluptatibus est excepturi odit, quasi soluta. Eum, ut!
                    Rerum, quod quas quisquam atque tempore provident reiciendis repellat ex obcaecati iure error harum nobis minus illum aspernatur? Architecto repudiandae fugit at eveniet tempora? Quasi ipsam eos accusantium obcaecati quod?
                    Debitis facilis assumenda voluptatibus. Quod, quam excepturi non magnam ipsa sed odio? Nesciunt itaque optio culpa incidunt ut excepturi autem, accusantium enim nemo reprehenderit! Doloremque nam mollitia ullam iusto distinctio?
                </Typography>
            </Box>
        </Box>
    );
}

HomePage.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default HomePage;