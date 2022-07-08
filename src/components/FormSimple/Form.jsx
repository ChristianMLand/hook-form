import { useState } from 'react';
import './Form.css';

const Form = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        "firstName" : {
            "value" : "",
            "validation" :  { "type" : "minLength", "comparator" : 2 }
        },
        "lastName" : {
            "value" : "",
            "validation" : { "type" : "minLength", "comparator" : 2 }
        },
        "email" : {
            "value" : "",
            "validation" : { "type" : "minLength", "comparator" : 5 }
        },
        "password" : {
            "value" : "",
            "validation" : { "type" : "minLength", "comparator" : 8 }
        },
        "confirmPassword" : {
            "value" : "",
            "validation" : { "type" : "matches", "comparator" : "password" }
        }
    });

    const handleChange = e => {
        const copy = structuredClone(formData)
        copy[e.target.name].value = e.target.value;
        setFormData(copy)
    };

    const validate = (inputName) => {
        const { type, comparator } = formData[inputName].validation;
        switch (type) {
            case "minLength":
                return formData[inputName].value.length < comparator ?  <p>{`${inputName} should be at least ${comparator} characters long`}</p> : ""
            case "maxLength":
                return formData[inputName].value.length > comparator ?  <p>{`${inputName} should be no more than ${comparator} characters long`}</p> : ""
            case "matches":
                return formData[inputName].value !== formData[comparator].value ? <p>{`${inputName} should match ${comparator}`}</p> : ""
            default:
                return ""
        }
    }

    const createUser = e => {
        e.preventDefault()
        if (Object.keys(formData).every(input => !validate(input))) {
            setUsers([...users, Object.entries(formData).reduce((prev, [name, { value }]) => { prev[name] = value; return prev }, {})])
        } else {
            alert("Invalid Form")
        }
    }

    return (
        <form className="form" onSubmit={ createUser }>
            <fieldset>
                <legend>Register</legend>
                <div className="form-input">
                    <div>
                        <label>First Name</label>
                        <input type="text" name="firstName" value={ formData.firstName.value } onChange={ handleChange }/>
                    </div>
                    { formData.firstName.value && validate("firstName") }
                </div>
                <div className="form-input">
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={ formData.lastName.value } onChange={ handleChange }/>
                    </div>
                    { formData.lastName.value && validate("lastName") }
                </div>
                <div className="form-input">
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={ formData.email.value } onChange={ handleChange }/>
                    </div>
                    { formData.email.value && validate("email") }
                </div>
                <div className="form-input">
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={ formData.password.value } onChange={ handleChange }/>
                    </div>
                    { formData.password.value && validate("password") }
                </div>
                <div className="form-input">
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" value={ formData.confirmPassword.value } onChange={ handleChange }/>
                    </div>
                    { formData.confirmPassword.value && validate("confirmPassword") }
                </div>
                <button>Submit</button>
            </fieldset>
            { users.map((user, i) => <p key={ i }>{user.firstName} {user.lastName}</p>)}
        </form>
    )
}

export default Form