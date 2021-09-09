
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

