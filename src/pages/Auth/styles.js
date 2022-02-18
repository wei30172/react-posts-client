const PaperStyle = (theme) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2)
})

const TitleStyle = (theme) => ({
  margin: theme.spacing(1),
})

const AvatarStyle = (theme) => ({
  margin: theme.spacing(1),
})

const SubmitButtonStyle = (theme) => ({
  margin: theme.spacing(3, 0, 2)
})

const GoogleButtonStyle = (theme) => ({
  marginBottom: theme.spacing(2)
})

export { PaperStyle, AvatarStyle, TitleStyle, SubmitButtonStyle, GoogleButtonStyle }