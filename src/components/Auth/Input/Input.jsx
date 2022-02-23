import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
const Input = ({ name, label, type, handleChange, handleShowPassword, half, autoFocus }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        type={type}
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        onChange={handleChange}
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        } : null}
      />
    </Grid>
  )
}

export default Input