import { makeStyles, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import React from 'react'
import { convertEventParameter } from '../helpers';
import { countryOptions, countryToFlag } from './Countries'

const countryUseStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
        marginRight: 10,
        fontSize: 18,
        },
    },
});

export default function CountrySelectInput(props) {
    const {name, value, onChange, error} = props; 
    const countryClasses = countryUseStyles(); 
    return (
        <Autocomplete
            style={{width: 300}}
            options={countryOptions}
            classes={{option: countryClasses.option}}
            autoHighlight
            getOptionSelected={(option, value) => option.label === value.label}
            getOptionLabel={(option) => option.label || ""}
            renderOption={(option) => 
                <React.Fragment>
                    <span>{countryToFlag(option.code)}</span>
                    {option.label} ({option.code})
                </React.Fragment>}
            renderInput={(params) => 
                <TextField
                    {...params}
                    label="Choose a country/region"
                    variant="outlined"
                    {...(error) && {error: true, helperText: error}}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />}
            onChange={(e, v) => onChange(convertEventParameter(name, v ? v.label: ''))}
        />
    )
}
