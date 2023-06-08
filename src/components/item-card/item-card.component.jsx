import { useContext, useState } from "react";

import "./item-card.styles.scss";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

function ItemCard({ product }) {
  const { name, firstvariation, secondvariation, thirdvariation, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const [buttonContainerDisplay, setButtonContainerDisplay] = useState(false);

  const toggleButtonsDisplay = () => {
    setButtonContainerDisplay(!buttonContainerDisplay);
  };

  const buttonsHide = () => {
    setButtonContainerDisplay(false)
  };

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
    <div className="product-card-container" onClick={() => toggleButtonsDisplay()}>
    <div className="button-container" style={{display: buttonContainerDisplay && "flex", justifyContent: buttonContainerDisplay && "center"}} >
      <Button name="firstvariation" className="first" onClick={addProductToCart} >
        {firstvariation.name}
        <span className="price">${firstvariation.price}</span>
      </Button>
      
      <Button name="secondvariation" className="second" onClick={addProductToCart} >
        {secondvariation.name}
        <span className="price">${secondvariation.price}</span>
      </Button>
      {thirdvariation ? (<Button name="thirdvariation" className="third" buttonType="inverted" onClick={addProductToCart} >
        {thirdvariation.name} <span className="price">${thirdvariation.price}</span>
      </Button>) : null }
    
        </div>
      <img src={imageUrl} alt={`${name}`}/>
     
      <span className="item-name" style={{display: buttonContainerDisplay && "none"}} > {name} </span>
      
      <div className="itemcard-footer"></div>
      
    </div>
  );
}

export default ItemCard;
