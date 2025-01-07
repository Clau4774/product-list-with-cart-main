import React from "react";
import { CartItemType } from "../../interfaces";
import closeButton from "../../assets/images/icon-remove-item.svg";
import { AppContext } from "../../context/AppContext";

function CartItem({ name, price, quantity }: CartItemType) {
  const totalPrice = price * quantity;

  const { removeElement } = React.useContext(AppContext);

  return (
    <div className="flex justify-between items-center text-sm">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <div>
          <p>
            <span className="text-red-700 font-semibold">{quantity}x</span>
            <span className="text-gray-400">@{price.toFixed(2)}</span>{" "}
            <span className="text-gray-400 font-semibold">
              ${totalPrice.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
      <div>
        <button onClick={() => removeElement(name)}>
          <img src={closeButton} alt="CloseButton" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
