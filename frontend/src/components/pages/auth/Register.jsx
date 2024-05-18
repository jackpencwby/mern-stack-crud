import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-gb';
import { register } from '../../../fetchs/auth'
import { useNavigate } from 'react-router-dom';
import { convertFieldResponseIntoMuiTextFieldProps } from '@mui/x-date-pickers/internals';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
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
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
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
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="fullname"
                            label="ชื่อ"
                            type='text'
                            name="fullname"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb" >
                            <DemoContainer components={['DatePicker']} >
                                <DatePicker label="วันเกิด" id="birthday" name="birthday" type='date' format="YYYY-MM-DD" slotProps={{ textField: { fullWidth: true } }} />
                            </DemoContainer>
                        </LocalizationProvider>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phone_number"
                            label="เบอร์โทรศัพท์"
                            type="phone"
                            id="phone_number"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="อีเมล"
                            type="email"
                            id="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="รหัสผ่าน"
                            type="password"
                            id="password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirm_password"
                            label="ยืนยันรหัสผ่าน"
                            type="password"
                            id="confirm_password"
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
                                    มีบัญชีอยู่เเล้วใช่ไหม ?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}