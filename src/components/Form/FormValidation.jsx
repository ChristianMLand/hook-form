import { React } from 'react';

const FormValidation = ({validation, inputValues, label}) => {
    const [ validationType, comparator ] = validation;
    const inputValue = inputValues[label];

    const validations = {
        minLength : { check : () => inputValue.length < comparator,  msg : `${ label } must be at least ${ comparator } characters`},
        maxLength : { check : () => inputValue.length > comparator, msg : `${ label } must be less than ${ comparator } characters`},
        matches : { check : () => inputValue !== inputValues[comparator], msg : `${ label } must match ${ comparator }`},
        minDigit : { check : () => +inputValue < comparator, msg: `${ label } must be at least ${ comparator }`}
    };

    const validator = validations[validationType];

    return <>{ inputValue && validator.check() && <p>{ validator.msg }</p> }</>;
}

export default FormValidation