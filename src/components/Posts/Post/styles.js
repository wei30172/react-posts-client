import { styled } from '@mui/system'

const CardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
}

const ButtonBaseStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const MediaStyle = {
  height: 0,
  paddingTop: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken'
}

const OverlayDiv = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
})

const OverlayBtn = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '0',
  color: 'white',
})

const DetailsDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
})

const TitleDiv = styled('div')({
  padding: '0 16px',
})

const ActionsStyle = {
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
}

export { CardStyle, ButtonBaseStyle, MediaStyle, OverlayDiv, OverlayBtn, DetailsDiv, TitleDiv, ActionsStyle }