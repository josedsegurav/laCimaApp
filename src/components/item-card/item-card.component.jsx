import { useContext, useEffect, useState } from "react";

import "./item-card.styles.scss";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

function ItemCard({ product }) {
  const { id, name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

 
  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <span className="name"> {name} </span>
        <span className="price">Price ${price} </span>
      <div className="footer">
      
      </div>
      <Button name="libra" className="libra" buttonType="inverted" onClick={addProductToCart} >
        Add to Cart
      </Button>
    </div>
  );
}

export default ItemCard;
