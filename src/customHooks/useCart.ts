import { useState } from "react";
import { CartItemType } from "../interfaces";

const useCart = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addElement = (cartElement: CartItemType): void => {
    setCart((prevCart) => [...prevCart, cartElement]);
  };

  const removeElement = (elemntName: string): void => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== elemntName));
  };

  const addQuantity = (cartElement: CartItemType): void => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === cartElement.id
          ? { ...item, quantity: item.quantity++ }
          : item
      )
    );
  };

  const reduceQuantity = (cartElement: CartItemType): void => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === cartElement.id
          ? { ...item, quantity: item.quantity-- }
          : item
      )
    );
  };

  return {
    addElement,
    addQuantity,
    removeElement,
    reduceQuantity,
    cart,
    setCart,
  };
};

export default useCart;
