import { useContext } from "react";
import { useNavigate } from "react-router-dom"

import "./cart-dropdown.styles.scss";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

function CartDropdown(props) {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    props.closeCartDropdown();
  }
  return (
    <div className="cart-dropdown-container">
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.name} cartItem={item} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandler} >CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
