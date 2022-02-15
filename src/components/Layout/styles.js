import { styled } from '@mui/system'
const drawerWidth = 180

const AppBarStyle = {
  width: `calc(100% - ${drawerWidth}px)`,
  ml: `${drawerWidth}px`
}

const AvatarStyle = (theme) => ({
  marginLeft: theme.spacing(2)
})

const DrawerStyle = {
  width: drawerWidth,
  flexShrink: 0,
  '&.MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  }
}

const PageDiv = styled('div')(
  ({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  width: '100%',
})
)

export { AppBarStyle, AvatarStyle, DrawerStyle, PageDiv }