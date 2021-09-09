import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const convertEventParameter = (name, value) => ({
    target: {
        name, value
    }
})

export default function DateInput(props) {
    const {label, name, value, onChange, error} = props; 
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar 
                variant="inline" 
                inputVariant="outlined" 
                label={label}
                format="MM/dd/yyyy"
                name={name}
                value={value}
                onChange={date => onChange(convertEventParameter(name, date))}
                {...(error) && {error: true, helperText: error}}
            />
        </MuiPickersUtilsProvider>
    )
}
