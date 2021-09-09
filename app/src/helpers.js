
/**
 * Depending on the form field, not all events returned are in the format
 * of { target : {name: name, value: value } }
 * 
 * This function takes the name of the field and its updated value 
 * and converts it into the target object to pass in as a proper parameter to the 
 * handleInputChange function 
 * @param {form field} name 
 * @param {the updated value to set the form field} value 
 * @returns an object called target with a name and value
 */
export const convertEventParameter = (name, value) => ({
    target: {
        name, value
    }
})

/*
    Emails are a collection of nearly any series of characters
    followed by an @
    another series of characters
    followed by a .
    another series of characters 
*/
const emailRegex = /.+@.+\..+/;

/* 
    US zip codes are either 5 digits or 9 digits (with a dash) 
    example: 12345 or 12345-6789
*/
const usZipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;

/*
    US phone numbers can include the country code +1 
    Area code is pretty much required nowadays - 3 digits (can be encapsulated with parenthesis)
    Followed by 3 digits 
    Can include a marker which can be a dash, a period, or a space
    Followed by 4 digits 
    Can include an extension that can be represented by x, ex, ext, extension, or a space 
    Can include a period or additional spaces following extension
    Followed by unlimited digits 
*/
const usPhoneNumberRegex = /^(\+?1)?[-.\s]?\(?(\d{3,3})[)-.\s]{0,2}(\d{3,3})[-.\s]?(\d{4,4})\s*((x|ex|ext|extension|\s)\.?\s*\d+)?$/; 
const usPhoneNumberMinLength = 10; 

const requiredFields = new Set([
    'firstName', 
    'lastName', 
    'emailAddress', 
    'streetAddress', 
    'city', 
    'state', 
    'country', 
    'zip', 
    'phoneNumber', 
    'dateOfBirth'
])

/**
 * Tests email against regex
 * @param {*} email 
 * @returns string
 */
const checkIsValidEmail = (email) => {
    if (!emailRegex.test(email)) {
        return "Email is invalid"; 
    } 
    return ""; 
}

/**
 * Tests zip against regex
 * @param {*} zip 
 * @returns string
 */
const checkIsValidUsZip = (zip) => {
    if (!usZipRegex.test(zip)) {
        return "Zip code is invalid"; 
    }
    return ""; 
}

/**
 * Tests phoneNumber against length requirement and regex
 * @param {*} phoneNumber 
 * @returns string
 */
const checkIsValidUsPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length < usPhoneNumberMinLength) {
        return "Phone number must be at least 10 digits"; 
    } else if (!usPhoneNumberRegex.test(phoneNumber)) {
        return "Phone number is invalid"; 
    }
    return ""; 
}

/**
 * Tests if fields are valid by checking against required ones
 * and against individual field functions
 * @param {*} field 
 * @param {*} fieldValue 
 * @returns string
 */
export const checkIsFieldValid = (field, fieldValue) => {
    if (requiredFields.has(field) && !(fieldValue && fieldValue.length !== 0)) {
        return "This field is required"; 
    } else if (field === 'emailAddress') {
        return checkIsValidEmail(fieldValue); 
    } else if (field === 'zip') {
        return checkIsValidUsZip(fieldValue); 
    } else if (field === 'phoneNumber') {
        return checkIsValidUsPhoneNumber(fieldValue); 
    } else {
        return ""; 
    }
}