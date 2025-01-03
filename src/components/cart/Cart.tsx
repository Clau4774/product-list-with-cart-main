import React from "react";
import { CartItemType } from "../../interfaces";
import CartItem from "./CartItem";
import { AppContext } from "../../context/AppContext";

function Cart() {
  const { data, addElement, cart } = React.useContext(AppContext);

  const [index, setIndex] = React.useState(0);

  const item = {
    id: index,
    name: data[index].name,
    price: data[index].price,
    quantity: 1,
  };

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
