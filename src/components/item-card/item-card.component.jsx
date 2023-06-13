import { useContext, useState } from "react";

import "./item-card.styles.scss";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

function ItemCard({ product }) {
  const { name, firstvariation, secondvariation, thirdvariation, imageUrl } = product;

  const { addItemToCart, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const [buttonContainerDisplay, setButtonContainerDisplay] = useState(false);
  const [buttonSelect, setButtonSelect] = useState(false);

  const toggleIsCartopen = () => setIsCartOpen(true);

  const toggleButtonsDisplay = () => {
    setButtonContainerDisplay(!buttonContainerDisplay);
  };

  const buttonsHide = () => {
    setButtonContainerDisplay(false)
  };

  const addProductToCart = (event) => {
    if (event.target.name === "firstvariation") {
      addItemToCart(firstvariation);
      buttonsHide();
      toggleIsCartopen();
    } else if (event.target.name === "secondvariation") {
      addItemToCart(secondvariation);
      buttonsHide();
      toggleIsCartopen();
    }else if (event.target.name === "thirdvariation"){
      addItemToCart(thirdvariation);
      buttonsHide();
      toggleIsCartopen();
    }
  };


  return (
    <div className="product-card-container">
    <div className="button-container" style={{display: buttonContainerDisplay && "flex", flexDirection: buttonContainerDisplay && "column", alignItems: buttonContainerDisplay && "center"}} >
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

      <span className="close" onClick={() => buttonsHide()} >✘</span>
    
        </div>
      <img src={imageUrl} alt={`${name}`} onClick={() => toggleButtonsDisplay()}/>
     
      <span className="item-name" style={{display: buttonContainerDisplay && "none"}} > {name} </span>
      
      <div className="itemcard-footer"></div>
      
    </div>
  );
}

export default ItemCard;
