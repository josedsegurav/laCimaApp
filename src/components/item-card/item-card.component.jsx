import { useContext } from "react";

import "./item-card.styles.scss";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

function ItemCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name"> {name} </span>
        <span className="price"> {price} </span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart} >Add to Cart</Button>
    </div>
  );
}

export default ItemCard;
