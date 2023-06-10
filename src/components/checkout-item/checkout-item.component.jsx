import "./checkout-item.styles.scss"

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function CheckoutItem ( {cartItem} ) {
    
    const {name, price, imageUrl, quantity} = cartItem

    const { addItemToCart, deleteCartItem, removeCartItem } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const deleteItemHandler = () => deleteCartItem(cartItem);
    const removeItemHandler = () => removeCartItem(cartItem);

    return (
        <div className="checkout-item-container">
           <span className="name" >{name}</span>
            <div className="description">
            <div className="update">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} ></img>
            </div>
             
            <span className="quantity">
                <div className="arrow" onClick={deleteItemHandler} >&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler} >&#10095;</div>
                <span className="remove-button" onClick={removeItemHandler} >✘</span>
            </span>
            </div>
            <span className="price">${price}</span>
            </div>
            
           
        </div>
    )
}

export default CheckoutItem;