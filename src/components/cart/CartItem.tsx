import React from "react";
import { CartItemType } from "../../interfaces";
import closeButton from "../../assets/images/icon-remove-item.svg";
import { AppContext } from "../../context/AppContext";

function CartItem({ itemName, itemPrice, quantity, setCart }: CartItemType) {
  const totalPrice = itemPrice * quantity;

  const RemoveItem = () => {
    setCart((prev: any) => {
      return prev.filter((item: any) => item.itemName !== itemName);
    });
  };

  return (
    <div>
      <div>
        <h3>{itemName}</h3>
        <div>
          <p>
            {quantity}x <span>{itemPrice}</span> <span>{totalPrice}</span>
          </p>
        </div>
      </div>
      <div>
        <button>
          <img src={closeButton} alt="CloseButton" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
