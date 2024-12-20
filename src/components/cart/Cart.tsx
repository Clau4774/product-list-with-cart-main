import React from "react";
import { CartItemType } from "../../interfaces";
import CartItem from "./CartItem";

function Cart({ cart, setCart }: { cart: any; setCart: any }) {
  return (
    <div>
      {cart.map((item: CartItemType, index: number) => (
        <CartItem
          setCart={setCart}
          key={index}
          itemName={item.name}
          itemPrice={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}

export default Cart;
