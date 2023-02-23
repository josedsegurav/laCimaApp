import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteCheckoutItem = (cartItems, productToDelete) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeItem = (cartItems, productToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  deleteCartItem: () => {},
  removeCartItem: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCheckoutTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(newCheckoutTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const deleteCartItem = (productToDelete) => {
    setCartItems(deleteCheckoutItem(cartItems, productToDelete));
  };

  const removeCartItem = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    deleteCartItem,
    removeCartItem,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
