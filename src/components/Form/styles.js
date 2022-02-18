import { styled } from '@mui/system'

const FormDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const FileInputDiv = styled('div')({
  width: '97%',
  margin: '10px 0'
})

const FieldStyle = {
  width: '97%',
  margin: '10px 0'
}

const ButtonStyle = (theme) => ({
  marginTop: theme.spacing(1),
})

const PaperStyle = (theme) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(2)
})

export { FormDiv, FileInputDiv, FieldStyle, ButtonStyle, PaperStyle }