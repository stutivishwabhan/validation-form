import { Button } from '@material-ui/core'
import React from 'react'

export default function SubmitButton(props) {
    const {text, size, color, variant, onClick, ...other} = props; 
    return (
        <Button 
            variant={variant || "contained"}
            size={size}
            color={color}
            onClick={onClick}
            {...other}
        >
            {text}
        </Button>
    )
}
