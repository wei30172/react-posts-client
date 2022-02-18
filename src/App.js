import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import { Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { pink } from '@mui/material/colors'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Navbar from './components/Navbar/Navbar'

const theme = createTheme({
  palette: {
    secondary: {
      main: pink[200]
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;