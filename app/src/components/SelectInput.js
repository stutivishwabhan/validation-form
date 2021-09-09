import { Autocomplete } from '@material-ui/lab'
import React from 'react'

export default function SelectInput(props) {
    const {style, options, classes, getOptionLabel, renderOption, renderInput, ...other} = props; 
    return (
        <Autocomplete
            style={style}
            options={options}
            classes={classes}
            autoHighlight
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            renderInput={renderInput}
            {...other}
      />
    )
}
