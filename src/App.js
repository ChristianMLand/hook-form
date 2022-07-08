import './App.css';
// import Form from './components/Form/Form'
import Form from './components/FormSimple/Form'
// import UserList from './components/User/UserList';
// import { useState } from 'react';

function App() {
  // const [users, setUsers] = useState([]);
  // const [form, setForm] = useState({})
  // const forms = [{ 
  //   name : "Register",
  //   inputs : [
  //     { label : "First Name", type : "text", validations : { minLength : 2 } },
  //     { label : "Last Name", type : "text", validations : { minLength : 2 } },
  //     { label : "Email", type : "email", validations : { minLength : 5 } },
  //     { label : "Password", type : "password", validations : { minLength : 8 } },
  //     { label : "Confirm Password", type : "password", validations : { minLength : 8, matches : "Password" } },
  //     { label : "Age", type : "number", validations : { minDigit : 18 } }
  //   ]
  // },
  // { 
  //   name : "Login",
  //   inputs : [
  //     { label : "Email", type : "email", validations : { minLength : 5 } },
  //     { label : "Password", type : "password", validations : { minLength : 8 } },
  //   ]
  // }]
  // useEffect(() => {
  //   axios.get("/api/forms/10")
  //   .then(data => {
  //     setForm(data.data)
  //   })
  // }, [])

  // const createUser = (e, inputValues) => {
  //   e.preventDefault();
  //   setUsers([ ...users, inputValues])
  // }

  return (
    <div className="App">
      <Form/>
      {/* { forms && forms.map((form, i) => <Form key={ i } form={ form } handleSubmit={ createUser } />) } */}
      {/* <UserList users={ users }/> */}
    </div>
  );
}

export default App;