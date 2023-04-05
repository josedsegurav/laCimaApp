import { useContext } from "react";

import "./item-card.styles.scss";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

function ItemCard({ product }) {
  
  const { name, firstvariation, secondvariation, imageUrl } = product;
  
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = (event) => {
    if(event.target.name === "libra") { 
      addItemToCart(firstvariation);
      
    } else if (event.target.name === "media"){
      addItemToCart(secondvariation);
    }
    
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <span className="name"> {name} </span>
       
      <div className="footer">
      
      </div>
      <Button name="libra" className="libra" buttonType="inverted" onClick={addProductToCart} >
        {firstvariation.name}
      </Button>
      <Button name="media" buttonType="inverted" onClick={addProductToCart} >
        {secondvariation.name}
      </Button>
    </div>
  );
}

export default ItemCard;
