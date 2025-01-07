import React from "react";
import { CartItemType } from "../../interfaces";
import CartItem from "./CartItem";
import { AppContext } from "../../context/AppContext";

function Cart() {
  const { data, addElement, totalCart, cart } = React.useContext(AppContext);

  const [index, setIndex] = React.useState(0);

  const item = {
    id: index,
    name: data[index].name,
    price: data[index].price,
    quantity: 1,
  };

  return (
    <div className="p-4 bg-white rounded-sm max-w-96">
      <h3 className="text-red-600 font-bold text-2xl">
        Your Cart({cart.length})
      </h3>
      <button
        onClick={() => {
          setIndex(index + 1);
          return addElement(item);
        }}
      >
        add Element
      </button>
      <div className="flex flex-col gap-4">
        {cart.length > 0 ? (
          cart.map((item: CartItemType, index: number) => (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        ) : (
          <p>Your Cart is Empty</p>
        )}
      </div>
      <div>
        <span>Order Total</span> <span>${totalCart.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Cart;
