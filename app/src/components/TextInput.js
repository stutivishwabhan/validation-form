import React from 'react'
import { TextField } from '@material-ui/core'

export default function TextInput(props) {
    const {label, name, value, style, helperText, onChange, error=null, ...other} = props; 
    return (
        <TextField 
            id="outlined-basic" 
            variant="outlined" 
            label={label} 
            name={name}
            value={value}
            className={style}
            onChange={onChange}
            {...(error) && {error: true, helperText: error}}
            {...other}
      />
    )
}
