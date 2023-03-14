import { useContext } from "react";

import "./item-card.styles.scss";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

function ItemCard({ product }) {
  
  const { name, libra, media, imageUrl } = product;
  
  const { addItemToCart } = useContext(CartContext);
  

  const addProductToCart = (event) => {
    if(event.target.name === "libra") { 
      addItemToCart(libra);

      
    } else if (event.target.name === "media"){
      addItemToCart(media);
    }
    
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <span className="name"> {name} </span>
       
      <div className="footer">
      
      </div>
      <Button name="libra" className="libra" buttonType="inverted" onClick={addProductToCart} >
        Libra
      </Button>
      <Button name="media" buttonType="inverted" onClick={addProductToCart} >
        Media
      </Button>
    </div>
  );
}

export default ItemCard;
