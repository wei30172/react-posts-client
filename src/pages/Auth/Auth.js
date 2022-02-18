import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp, logIn, userAuth } from '../../state/actions/actionCreators/authActions';
import { Container, Paper, Grid, Typography, Avatar, Button } from '@mui/material'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { PaperStyle, AvatarStyle, TitleStyle, SubmitButtonStyle, GoogleButtonStyle } from './styles'
import { GoogleLogin } from 'react-google-login';
import Input from '../../components/Auth/Input/Input';
import Icon from '../../components/Auth/Icon/Icon';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleShowPassword = () => setShowPassword(!showPassword)

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(logIn(formData, navigate));
    }
  }

  const googleSuccess = async(res) => {
    const result = res?.profileObj
    const token = res?.tokenId
    try {
      dispatch(userAuth(result, token))
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const googleError = () => {
    alert('Google Sign In was unsuccessful. Try again later')
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={PaperStyle} elevation={3}>
        <Avatar sx={AvatarStyle}>
          <VpnKeyIcon />
        </Avatar>
        <Typography
          variant="h5"
          component="h1"
          sx={TitleStyle}
        >
          { isSignup ? 'Sign up' : 'Log in' }
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          {/*  Sign Up & Log In Form */}
          { isSignup && (
            <>
              <Input
                name="firstName"
                label="First Name"
                handleChange={handleChange}
                autoFocus half
              />
              <Input
                name="lastName"
                label="Last Name"
                handleChange={handleChange}
                half
              />
            </>
            )}
            <Input
              name="email"
              label="Email Address"
              type="email"
              handleChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />
            { isSignup && <Input
              name="confirmPassword"
              label="Repeat Password"
              type="password"
              handleChange={handleChange}
            /> }
          </Grid>
          {/* Sign Up or Log In Button*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={SubmitButtonStyle}>
            { isSignup ? 'Sign Up' : 'Log In' }
          </Button>
          <GoogleLogin
            clientId="431057118212-hu2lfbm568vp2cbhosiqc4jnh0d843gb.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={renderProps.disabled}
                onClick={renderProps.onClick}
                startIcon={<Icon />} 
                sx={GoogleButtonStyle}
              >
                Google Log In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy={'single_host_origin'}
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Log in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth