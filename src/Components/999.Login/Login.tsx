import React from 'react';
import { Container, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Link, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
  SetLogin: () => void,
}

const LoginPage: React.FC<LoginPageProps> = ({ SetLogin }) => {

  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleNavigate = (nav: string) => {
    navigate(nav, { replace: true });
  };

  return (
    <Container component="main" maxWidth="xs">
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
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
            onClick={SetLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={() => handleNavigate('/signup')}>

                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
        {'Copyright © '}
        <Link color="inherit" href="https://yourwebsite.com/">
          Link1 Social
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  );
}

export default LoginPage;