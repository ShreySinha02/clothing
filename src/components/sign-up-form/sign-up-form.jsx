import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import Button from "../button/botton";
import FormInput from "../form-input/form-input";
import './sign-up.style.scss'
const defaultFormfield = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormfield);
  const { displayName, email, password, confirmPassword } = defaultFormfield;


const reserFormField = () => {
    setFormFields(defaultFormfield);
}

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };



  const handleSubmit = async (event) =>{
    event.preventDefault()
    if ( password !== confirmPassword)
    {
        alert("password do not match");
        return ;
    }
    try{
        const {user} = await createAuthUserWithEmailAndPassword(email,password);

        await createUserDocumentFromAuth(user,{displayName})
        reserFormField()


    }catch(error){
        console.log(error)
    }
  }

  return (
    <div className='sign-up-container'>
        <h2>Don't have an account</h2>
      <span>Sign up with email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
        label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
        label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
        label="Passowrd"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
        label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmpassword"
          value={confirmPassword}
        />
        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
