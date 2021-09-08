import React from 'react'; 
import { TextField, Grid, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CountrySelect from './CountrySelect';

const OutlinedTextField = (props) => {
    return (
      <TextField id="outlined-basic" variant="outlined" label={props.label} className={props.style}/>
    )
}

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
    }
  }));

const ValidationForm = () => {
    const classes = useStyles(); 

    return (
    <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}> <h3>Welcome!</h3> </Grid>
        <Grid item xs={12} className={classes.multipleItems}>
            <OutlinedTextField label="First Name" style={classes.padRight}/>
            <OutlinedTextField label="Last Name" style={classes.padLeft}/>
        </Grid>
        <Grid item xs={12}>
            <OutlinedTextField label="Email Address"/>
        </Grid>
        <Grid item xs={12}>
            <OutlinedTextField label="Street Address"/>
        </Grid>
        <Grid item xs={12} className={classes.multipleItems}>
            <OutlinedTextField label="City" style={classes.padRight}/>
            <CountrySelect style={classes.padLeft}/>
        </Grid>
        <Grid item xs={12} className={classes.multipleItems}>
            <CountrySelect style={classes.padRight}/>
            <OutlinedTextField label="Zip/Postal" style={classes.padLeft}/>
        </Grid>
        <Grid item xs={12}>
            <OutlinedTextField label="Phone Number"/>
        </Grid>
        <Grid item xs={12}>
            <OutlinedTextField label="Date of Birth"/>
        </Grid>
        <Grid item xs={12}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
            <Button variant="outlined">Get my free samples</Button>
        </Grid>
    </Grid>
)
}

export default ValidationForm; 