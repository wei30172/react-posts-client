import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './state/actions/actionCreators/postActions'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { pink, grey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: grey,
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
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [currentId, dispatch])
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home currentId={currentId} setCurrentId={setCurrentId}/>} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;