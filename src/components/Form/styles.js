import { styled } from '@mui/system'

const FormDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
}}))

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
  padding: theme.spacing(1)
})

export { FormDiv, FileInputDiv, FieldStyle, ButtonStyle, PaperStyle }