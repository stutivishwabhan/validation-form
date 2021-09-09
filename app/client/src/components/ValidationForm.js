import { useState } from 'react'; 
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import CountrySelectInput from './CountrySelectInput';
import StateSelectInput from './StateSelectInput';
import DateInput from './DateInput';
import SubmitButton from './SubmitButton';
import { badCheckIsFieldValid } from '../helpers';

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

  const initialState = {
      responseToPost: '', 
  }


const ValidationForm = () => {
    const [values, setValues] = useState(initialFormValues); 
    const [errors, setErrors] = useState({}); 
    const classes = useStyles(); 
    const [state, setState] = useState(initialState); 

    /**
     * Checks if all form fields have valid entries
     * Stores map (key=field, value=error message) in errors
     * @param {*} fieldValues 
     * @returns boolean 
     */
    const areFieldsValid = (fieldValues = values) => {
        let validationState = {}; 
        Object.keys(fieldValues).map((field) => (
            validationState[field] = badCheckIsFieldValid(field, fieldValues[field])
        ))
        setErrors({...validationState}); 
        return Object.values(validationState).every(i => i === "");
    }

    /**
     * Alerts the user if all fields are valid
     * @param {*} e 
     */
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const validPost = areFieldsValid(); 
        const response = await fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ validPost: validPost, post: values }),
          });
        const body = await response.text();
        
        setState({ ...state, responseToPost: body });
    }

    /**
     * Updates the field to its new value
     * @param {*} e 
     */
    const handleInputChange = (e) => {
        const {name, value} = e.target; 
        setValues({
            ...values,
            [name]: value
        });
    }

    return (
    <>
    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
    <Grid container spacing={2}>
        <Grid item xs={12}> <h3>Welcome!</h3> </Grid>
        <Grid item xs={12} className={classes.multipleItems}>
            {/* First Name Text Field */}
            <TextInput 
                label="First Name" 
                name="firstName"
                value={values.firstName}
                style={classes.padRight} 
                onChange={handleInputChange}
                error={errors.firstName}
            />
            {/* Last Name Text Field */}
            <TextInput 
                label="Last Name" 
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
            />
        </Grid>
        <Grid item xs={12}>
            {/* Email Address Text Field */}
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
            {/* Street Address Text Field */}
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
            {/* City Text Field */}
            <TextInput 
                label="City" 
                name="city"
                value={values.city}
                style={classes.padRight}
                onChange={handleInputChange}
                error={errors.city}
            />
            {/* State Dropdown */}
            <StateSelectInput 
                name="state"
                value={values.state}
                onChange={handleInputChange}
                error={errors.state}
            />
        </Grid>
        <Grid item xs={12} className={classes.multipleItems}>
            {/* Country Dropdown */}
            <CountrySelectInput 
                name="country"
                value={values.country}
                onChange={handleInputChange}
                error={errors.country}
            />
            {/* Zip Code Text Field */}
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
            {/* Phone Number Text Field */}
            <TextInput 
                label="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleInputChange}
                error={errors.phoneNumber}
            />
        </Grid>
        <Grid item xs={12}>
            {/* Date Picker */}
            <DateInput 
                label="Date of Birth"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={handleInputChange}
                error={errors.dateOfBirth}
            />
        </Grid>
        <Grid item xs={12}>
            {/* Gender Single Choice */}
            <RadioInput 
                label="Gender"
                name="gender"
                value={values.gender}
                onChange={handleInputChange}
                options={genderOptions}
            />
        </Grid>
        <Grid item xs={12}>
            {/* Submit Button */}
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
    <p style={{textAlign: 'center', color: state.responseToPost === 'Successfully submitted!' ? 'green' : 'red'}}>{state.responseToPost}</p>
    </>
)
}

export default ValidationForm; 