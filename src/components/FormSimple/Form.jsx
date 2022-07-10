import { useState } from 'react';
import './Form.css';

const Form = () => {
    const [users, setUsers] = useState([]);
    // this simple approach only allows for a single validation type per input, see the more complex form for a way to allow for multiple
    const [formData, setFormData] = useState({
        "firstName" : {
            "type" : "text",
            "label" : "First Name",
            "value" : "",
            "validation" :  { "type" : "minLength", "comparator" : 2 },
            "error" : ""
        },
        "lastName" : {
            "type" : "text",
            "label" : "Last Name",
            "value" : "",
            "validation" : { "type" : "minLength", "comparator" : 2 },
            "error" : ""
        },
        "email" : {
            "type" : "email",
            "label" : "Email",
            "value" : "",
            "validation" : { "type" : "minLength", "comparator" : 5 },
            "error" : ""
        },
        "password" : {
            "type" : "password",
            "label" : "Password",
            "value" : "",
            "validation" : { "type" : "minLength", "comparator" : 8 },
            "error" : ""
        },
        "confirmPassword" : {
            "type" : "password",
            "label" : "Confirm Password",
            "value" : "",
            "validation" : { "type" : "matches", "comparator" : "password" },
            "error" : ""
        }
    });

    const handleChange = e => {
        const copy = structuredClone(formData) // does a deep copy of the current state before we modify it
        const { name, value } = e.target;
        copy[name].value = value;
        copy[name].error = validate(name, value)
        setFormData(copy)
    };

    const validate = (name, value) => {
        const { label, validation } = formData[name]
        const { type, comparator } = validation;
        // simply add more cases to the switch statement here if more validation types are needed
        switch (type) {
            case "minLength":
                return value.length < comparator ? `${label} should be at least ${comparator} characters long` : ""
            case "maxLength":
                return value.length > comparator ?  `${label} should be no more than ${comparator} characters long` : ""
            case "matches":
                return value !== formData[comparator].value ?`${label} should match ${comparator}` : ""
            default:
                return ""
        }
    }

    const createUser = e => {
        e.preventDefault()
        // this condition will be false if any input has an error
        if (Object.keys(formData).every(input => !formData[input].error)) {
            // this creates an object mapping the input names to their values
            const userData = Object.entries(formData).reduce((prev, inputData) => {
                const [name, { value }] = inputData;
                prev[name] = value; 
                return prev 
            }, {})
            setUsers([...users, userData])
        } else {
            alert("Invalid Form")
        }
    }

    return (
        <form className="form" onSubmit={ createUser }>
            <fieldset>
                <legend>Register</legend>
                { Object.entries(formData).map(([name, {label, type, value, error}], i) => 
                    <div key={ i } className="form-input">
                        <div>
                            <label>{ label }</label>
                            <input type={ type } name={ name } value={ value } onChange={ handleChange }/>
                        </div>
                        { value && <p>{ error }</p> }
                    </div>
                )}
                <button>Submit</button>
            </fieldset>
            { users.map((user, i) => <p key={ i }>{user.firstName} {user.lastName}</p>)}
        </form>
    )
}

export default Form