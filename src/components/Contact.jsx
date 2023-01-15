import React from "react";
import ContactInput from "./ContactInput";
import TextArea from "./TextArea";

function ContactForm() {
  return (
    <section id="contact">
      <h2>Contáctanos</h2>
      <form action="">
        <ContactInput
          labelFor="name"
          labelText="Nombre"
          inputType="text"
          inputId="name"
          inputName="nombre"
          inputPlaceholder="Tu nombre..."
        />

        <ContactInput
          labelFor="email"
          labelText="Email"
          inputType="text"
          inputId="email"
          inputName="email"
          inputPlaceholder="Tu email..."
        />

        <ContactInput
          labelFor="mobile"
          labelText="Telefono"
          inputType="number"
          inputId="mobile"
          inputName="telefono"
          inputPlaceholder="Tu numero de telefono..."
        />

        <ContactInput
          labelFor="subject"
          labelText="Asunto"
          inputType="text"
          inputId="subject"
          inputName="asunto"
          inputPlaceholder="Asunto..."
        />

        <TextArea
          labelFor="message"
          labelText="Mensaje"
          textName="mensaje"
          textId="message"
          textCols="20"
          textRows="3"
        />

        <input type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default ContactForm;
