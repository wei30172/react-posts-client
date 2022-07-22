import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionType } from "../../state/actions/actionTypes";
import { AppBar, Toolbar, Typography, Avatar, Button } from "@mui/material";
import { HeadingStyle, ProfileDiv, AvatarStyle } from "./styles";
import { grey } from "@mui/material/colors";
import decode from "jwt-decode";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch({ type: ActionType.LOGOUT });
    navigate("/auth");
    setUser(null);
  };

  useEffect(() => {
    const logout = () => {
      dispatch({ type: ActionType.LOGOUT });
      navigate("/auth");
      setUser(null);
    };
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      // if token expired
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, dispatch, navigate, user?.token]);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: grey[500] }}>
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          color="textSecondary"
          variant="h6"
          noWrap
          sx={HeadingStyle}
        >
          Home
        </Typography>
        {user ? (
          <ProfileDiv>
            <Avatar
              alt={user.result.name}
              src={user.result.imageUrl}
              sx={AvatarStyle}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography variant="h6">{user.result.name}</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </ProfileDiv>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
