import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import Footer from "../../components/footer/Footer";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function Checkout () {

    const {cartItems, cartTotal} = useContext(CartContext);

    return (
        <div className="checkout-container">
        <div className="checkout-header">
        <div className="header-block">
        <span>Producto</span>
        </div>
        {/* <div className="header-block">
        <span>Description</span>
        </div>
        <div className="header-block">
        <span>Qt</span>
        </div> */}
        <div className="header-block">
        <span>Precio Unitario</span>
        </div>
        {/* <div className="header-block">
        <span>Remove</span>
        </div> */}
    </div>
    {cartItems.map(item => <CheckoutItem key={item.name} cartItem={item} /> )}
    <span className="total">Total ${cartTotal}</span>

    </div>
    )
}

export default Checkout;