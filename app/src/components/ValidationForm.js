import React, { useState } from 'react'; 
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import CountrySelectInput from './CountrySelectInput';
import StateSelectInput from './StateSelectInput';
import DateInput from './DateInput';
import SubmitButton from './SubmitButton';

const initialFormValues = {
    firstName: '', 
    lastName: '', 
    emailAddress: '', 
    streetAddress: '', 
    city: '', 
    state: '',
    country: '', 
    zip: '', 
    phoneNumber: '', 
    dateOfBirth: new Date(), 
    gender: 'male'
}

const genderOptions = [
    {value: 'male', label: 'Male'}, 
    {value: 'female', label: 'Female'}, 
    {value: 'other', label: 'Other'}
]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: '-webkit-center',
    },
    multipleItems: {
        display: 'inline-flex',
        justifyContent: 'center', 
    },
    padLeft: {
        marginLeft: '10px',
    }, 
    padRight: {
        marginRight: '10px',
    }, 
    longTextField: {
        width: '400px',
    }
  }));


const ValidationForm = () => {
    const [values, setValues] = useState(initialFormValues); 
    const [errors, setErrors] = useState({}); 
    const classes = useStyles(); 

    const areFieldsValid = () => {
        const emailRegex = /.+@.+\..+/;
        const numericRegex = /^(0|[1-9][0-9]*)$/; 
        let validationState = {}; 
        validationState.firstName = values.firstName.length !== 0 ? "" : "This field is required"; 
        validationState.lastName = values.lastName.length !== 0 ? "" : "This field is required"; 
        validationState.emailAddress = values.emailAddress.length !== 0 ? ((emailRegex).test(values.emailAddress) ? "" : "Email is invalid") : "This field is required"; 
        validationState.streetAddress = values.streetAddress.length !== 0 ? "" : "This field is required"; 
        validationState.city = values.city.length !== 0 ? "" : "This field is required"; 
        validationState.country = values.country.length !== 0 ? "" : "This field is required"; 
        validationState.zip = values.zip ? "" : "This field is required"; 
        validationState.phoneNumber = values.phoneNumber.length !== 0 ? (values.phoneNumber.length > 9 && (numericRegex.test(values.phoneNumber)) ? "" : "Phone number must be at least 10 digits") : "This field is required";
        validationState.dateOfBirth = values.dateOfBirth ? "" : "This field is required"; 
        setErrors({...validationState}); 
        console.log(validationState); 
        return Object.values(validationState).every(i => i === "");
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (areFieldsValid()) {
            alert('all fields valid');
        }
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target; 
        setValues({
            ...values,
            [name]: value
        });
    }

    return (
    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
    <Grid container spacing={2}>
        <Grid item xs={12}> <h3>Welcome!</h3> </Grid>
        <Grid item xs={12} className={classes.multipleItems}>
            <TextInput 
                label="First Name" 
                name="firstName"
                value={values.firstName}
                style={classes.padRight} 
                onChange={handleInputChange}
                error={errors.firstName}
            />
            <TextInput 
                label="Last Name" 
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
            />
        </Grid>
        <Grid item xs={12}>
            <TextInput 
                label="Email Address"
                name="emailAddress"
                value={values.emailAddress}
                onChange={handleInputChange}
                style={classes.longTextField}
                error={errors.emailAddress}
            />
        </Grid>
        <Grid item xs={12}>
            <TextInput 
                label="Street Address"
                name="streetAddress"
                value={values.streetAddress}
                onChange={handleInputChange}
                style={classes.longTextField}
                error={errors.streetAddress}
            />
        </Grid>
        <Grid item xs={12} className={classes.multipleItems}>
            <TextInput 
                label="City" 
                name="city"
                value={values.city}
                style={classes.padRight}
                onChange={handleInputChange}
                error={errors.city}
            />
            <StateSelectInput 
                name="state"
                value={values.state}
                onChange={handleInputChange}
                /* no error for state since it's not a required field */
            />
        </Grid>
        <Grid item xs={12} className={classes.multipleItems}>
            <CountrySelectInput 
                name="country"
                value={values.country}
                onChange={handleInputChange}
                error={errors.country}
            />
            <TextInput 
                label="Zip/Postal" 
                name="zip"
                value={values.zip}
                style={classes.padLeft}
                onChange={handleInputChange}
                error={errors.zip}
            />
        </Grid>
        <Grid item xs={12}>
            <TextInput 
                label="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleInputChange}
                error={errors.phoneNumber}
            />
        </Grid>
        <Grid item xs={12}>
            <DateInput 
                label="Date of Birth"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={handleInputChange}
                error={errors.dateOfBirth}
            />
        </Grid>
        <Grid item xs={12}>
            <RadioInput 
                name="gender"
                value={values.gender}
                onChange={handleInputChange}
                options={genderOptions}
            />
        </Grid>
        <Grid item xs={12}>
            <SubmitButton 
                variant="outlined"
                size="medium"
                color="primary"
                text="Get my free samples"
                type="submit"
            />
        </Grid>
    </Grid>
    </form>
)
}

export default ValidationForm; 