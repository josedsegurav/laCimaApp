import "./cart-item.styles.scss";

function CartItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} ></img>
      <div className="item-details">
      <span>{name}</span>
      <span>{quantity} X ${price}</span>
      </div>
    </div>
  );
}

export default CartItem;
