import React from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

export default function RadioInput(props) {
    const {label, name, value, options, onChange} = props; 

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <RadioGroup row
                label={label}
                name={name}
                value={value}
                onChange={onChange}
            >
                {
                    options.map( (option, index) => (
                        <FormControlLabel value={option.value} control={<Radio />} label={option.label}/>
                    ))
                }
            </RadioGroup>
        </FormControl>
    )
}
