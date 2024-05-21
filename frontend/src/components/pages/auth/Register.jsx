import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-gb';
import { register } from '../../../fetchs/auth'
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                MERN STACK CRUD
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const data = new FormData(event.currentTarget);

            const response = await register({
                fullname: data.get('fullname'),
                birthday: data.get('birthday'),
                phone_number: data.get('phone_number'),
                email: data.get('email'),
                password: data.get('password'),
                confirm_password: data.get('confirm_password')
            });

            alert("สมัครสมาชิกสำเร็จ");

            navigate('/login');
        }
        catch (err) {
            alert("สมัครสมาชิกไม่สำเร็จ")
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(/register.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            สมัครสมาชิก
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="text"
                                name="fullname"
                                id="fullname"
                                label="ชื่อ"
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb" >
                                <DemoContainer components={['DatePicker']} >
                                    <DatePicker label="วันเกิด" type='date' name="birthday" id="birthday" format="YYYY-MM-DD" slotProps={{ textField: { fullWidth: true } }} />
                                </DemoContainer>
                            </LocalizationProvider>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="phone"
                                name="phone_number"
                                id="phone_number"
                                label="เบอร์โทรศัพท์"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="email"
                                name="email"
                                id="email"
                                label="อีเมล"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="password"
                                name="password"
                                id="password"
                                label="รหัสผ่าน"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="password"
                                name="confirm_password"
                                id="confirm_password"
                                label="ยืนยันรหัสผ่าน"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                สมัครสมาชิก
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        มีบัญชีเเล้วใช่ไหม ?
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}