import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import PostDetails from "./pages/PostDetails/PostDetails";

const theme = createTheme({
  palette: {
    secondary: {
      main: pink[200],
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Home />} />
              <Route path="/:id" element={<PostDetails />} />
              <Route
                path="/auth"
                element={!user ? <Auth /> : <Navigate to="/" />}
              />
            </Routes>
          </Layout>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
