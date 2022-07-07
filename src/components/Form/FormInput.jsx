import { React } from 'react';
import FormValidation from './FormValidation';

const FormInput = ({ input, inputValues, setInputValues }) => {
    const handleChange = e => setInputValues({ ...inputValues, [label] : e.target.value });
    const { label, type, validations } = input;

    return (
        <div className="form-input">
            <div>
                <label>{ label }</label>
                <input type={ type } value={ inputValues[label] } onChange={ handleChange }/>
            </div>
            { Object.entries(validations).map((validation, i) => 
                <FormValidation key={ i } validation={ validation } inputValues={ inputValues } label={ label }/>) 
            }
        </div>
    );
}

export default FormInput;