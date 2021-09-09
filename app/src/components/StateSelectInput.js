import { TextField } from '@material-ui/core'
import React from 'react'
import SelectInput from './SelectInput'
import { stateOptions } from './States'

export default function StateSelectInput(props) {
    return (
        <SelectInput
            options={stateOptions}
            getOptionLabel={(option) => option.name + ' (' + option.abbreviation + ')'}
            renderInput={(params) => 
                <TextField
                    {...params}
                    label="Choose a state/province"
                    variant="outlined"
                />
            }
            style={{ width: 300 }}
        />
    )
}
