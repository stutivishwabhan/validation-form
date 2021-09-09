import { makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import { countryOptions, countryToFlag } from './Countries'
import SelectInput from './SelectInput'

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
    const countryClasses = countryUseStyles(); 
    return (
        <SelectInput
                options={countryOptions}
                getOptionLabel={(option) => option.label}
                renderOption={(option) => 
                    <React.Fragment>
                        <span>{countryToFlag(option.code)}</span>
                        {option.label} ({option.code})
                    </React.Fragment>
                }
                renderInput={(params) => 
                    <TextField
                        {...params}
                        label="Choose a country/region"
                        variant="outlined"
                    />
                }
                style={{ width: 300 }}
                classes={{option: countryClasses.option}}
        />
    )
}
