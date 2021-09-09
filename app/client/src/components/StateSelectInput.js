import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import React from 'react'
import { convertEventParameter } from '../helpers';
import { stateOptions } from './States'

export default function StateSelectInput(props) {
    const {name, value, onChange, error} = props; 
    return (
        <Autocomplete
            style={{width: 300}}
            options={stateOptions}
            autoHighlight
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name + ' (' + option.abbreviation + ')' || ""}
            renderInput={(params) => 
                <TextField
                    {...params}
                    label="Choose a state/province"
                    variant="outlined"
                    {...(error) && {error: true, helperText: error}}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />}
            onChange={(e, v) => onChange(convertEventParameter(name, v ? v.name : ''))}
        />
    )
}
