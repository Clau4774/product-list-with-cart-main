import React from "react";
import { CartItemType } from "../../interfaces";
import closeButton from "../../assets/images/icon-remove-item.svg";
import { AppContext } from "../../context/AppContext";

function CartItem({ name, price, quantity }: CartItemType) {
  const totalPrice = price * quantity;

  const { removeElement } = React.useContext(AppContext);

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <p>
            {quantity}x <span>{price}</span> <span>{totalPrice}</span>
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
