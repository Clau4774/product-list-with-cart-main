import { useState } from "react";
import { CartItemType } from "../interfaces";

const useCart = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addElement = (cartElement: CartItemType): void => {
    setCart((prevCart) => [...prevCart, cartElement]);
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

  const removeElement = (cartElement: CartItemType): void => {
    console.log("Llama al hook");
    console.log(cartElement);
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== cartElement.id)
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
