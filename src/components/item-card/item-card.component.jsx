import { useContext } from "react";

import "./item-card.styles.scss";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

function ItemCard({ product }) {
  const { name, firstvariation, secondvariation, thirdvariation, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = (event) => {
    if (event.target.name === "firstvariation") {
      addItemToCart(firstvariation);
    } else if (event.target.name === "secondvariation") {
      addItemToCart(secondvariation);
    }else if (event.target.name === "thirdvariation"){
      addItemToCart(thirdvariation);
    }
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <span className="name"> {name} </span>

      <div className="footer"></div>
      <Button name="firstvariation" className="libra" buttonType="inverted" onClick={addProductToCart} >
        {firstvariation.name}
      </Button>
      <Button name="secondvariation" buttonType="inverted" onClick={addProductToCart} >
        {secondvariation.name}
      </Button>
      {thirdvariation ? (<Button name="thirdvariation" className="third" buttonType="inverted" onClick={addProductToCart} >
        {thirdvariation.name}
      </Button>) : null }
    </div>
  );
}

export default ItemCard;
