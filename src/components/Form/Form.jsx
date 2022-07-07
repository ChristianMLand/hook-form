import { useState } from 'react';
import FormInput from './FormInput';
import './Form.css';

const Form = ({ form, handleSubmit }) => {
    const [inputValues, setInputValues] = useState({});
    const { name, inputs } = form;

    return (
        <form className="form" onSubmit={ e => handleSubmit(e, inputValues) }>
            <fieldset>
                <legend>{ name }</legend>
                { inputs.map((input, i) => 
                    <FormInput key={ i } input={ input } inputValues={ inputValues } setInputValues={ setInputValues }/>) 
                }
                <button>Submit</button>
            </fieldset>
        </form>
    )
}

export default Form