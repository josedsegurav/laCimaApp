import { useState } from "react";

import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../firebase/firebase.utils"

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component"

import "./contact.styles.scss"

const defaultContactFields = {
  name: "",
  email: "",
  phone: "",
  text: "",
};

function Contact() {

  const [contactFields, setContactFields] = useState(defaultContactFields);

  const { name, email, phone, text } = contactFields;

  const resetContactFields = () => {
    setContactFields(defaultContactFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContactFields({ ...contactFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(contactFields);
};

  return (
    <div id="contact" className="sign-up-container">
 <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <FormInput
        
          label= "Nombre"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />
        <FormInput
        
          label= "Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
                <FormInput
        
        label= "Telefono"
        type="number"
        required
        onChange={handleChange}
        name="phone"
        value={phone}
      />
              <FormInput
        
        label= "Mensaje"
        type="text"
        required
        onChange={handleChange}
        name="text"
        value={text}
      />
        <div className="buttons-container">
        <Button type="submit" >Enviar</Button>
        </div>
        </form>

    </div>
  );
}

export default Contact;
