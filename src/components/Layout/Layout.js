import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, AppBar, Toolbar, Typography, Avatar } from '@mui/material'
import { AvatarStyle, PageDiv } from './styles';
import HomeIcon from '@mui/icons-material/Home'
import { format } from 'date-fns'

export default function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const menuItems = [
    { 
      text: 'Home', 
      icon: <HomeIcon color="secondary" />, 
      path: '/' 
    }
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      {/* app bar */}
      <AppBar
        position="fixed"
        color="primary"
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>User</Typography>
          <Avatar src="" sx={AvatarStyle}/>
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      {/* <Drawer
        sx={DrawerStyle}
        variant="permanent"
        anchor="left"
      >
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={location.pathname === item.path ? { bgcolor: '#f4f4f4' } : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer> */}
      {/* main content */}
      <PageDiv>
        { children }
      </PageDiv>
    </Box>
  )
}
