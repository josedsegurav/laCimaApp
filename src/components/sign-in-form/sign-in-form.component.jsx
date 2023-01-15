import { useState } from "react";

import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../firebase/firebase.utils"

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component"

import "./sign-in-form.styles.scss"

const defaultSignInFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignInForm() {

  const [signInformFields, setSignInFormFields] = useState(defaultSignInFormFields);

  const { email, password } = signInformFields;

  const resetSignInFormFields = () => {
    setSignInFormFields(defaultSignInFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignInFormFields({ ...signInformFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await signInAuthUserWithEmailAndPassword(email, password);
        console.log(response);
        resetSignInFormFields(); 
    } catch (error) {
        switch (error.code){
            case "auth/user-not-found":
                alert("No user associated with this email");
                break;
            case "auth/wrong-password":
            alert("Incorrect password!")
            break;
            default:
                console.log(error);
        }
  };
}

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  return (
    <div className="sign-up-container">
 <h3>Already have an account?</h3>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
        
          label= "Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
        
          label= "Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
        <Button type="submit" >Sign In</Button>
        <Button type="button" onClick={signInWithGoogle} buttonType="google" >Google Sign In</Button>
        </div>
        </form>

    </div>
  );
}

export default SignInForm;
