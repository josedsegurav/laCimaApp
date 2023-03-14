import React from "react";
import StepItem from "./StepItem";

function Steps() {
  return (
    <section id="steps">
      <h2>¿Cómo ordenar?</h2>
      <div className="steps_grid">
        <StepItem
          iconLeft="fas fa-shopping-cart fa-5x"
          textRight="Elige y añade al carrito los productos que te gusten"
          iconRight="far fa-credit-card fa-5x"
          textLeft="Realiza el pago con tarjeta o transferencia bancaria"
        />
        <StepItem
          iconLeft="fas fa-comments fa-5x"
          textRight="Una vez recibido el pedido nos pondremos en contacto contigo"
          iconRight="fas fa-laugh-beam fa-5x"
          textLeft="Disfruta el pedido en la comodidad de tu hogar"
        />
      </div>
    </section>
  );
}

export default Steps;
