import React from "react";
import { ButtonAddToCartInterface } from "../../interfaces/index";
import addCartIcon from "../../assets/images/icon-add-to-cart.svg";
import incrementItemIcon from "../../assets/images/icon-increment-quantity.svg";
import decrementItemIcon from "../../assets/images/icon-decrement-quantity.svg";

function ButtonAddToCart({ ...props }: ButtonAddToCartInterface) {
  const [itemSelected, setItemSelected] = React.useState({
    name: props.name,
    price: props.price,
    thumbnail: props.thumbnail,
    quantity: 0,
  });

  console.log(itemSelected);

  const firstProductAdd = (): void => {
    if (itemSelected.quantity === 0) {
      addProduct();
    }
  };

  const addProduct = (): void => {
    setItemSelected({ ...itemSelected, quantity: itemSelected.quantity + 1 });
  };

  const removeProduct = (): void => {
    setItemSelected({ ...itemSelected, quantity: itemSelected.quantity - 1 });
  };

  return (
    <>
      <button
        onClick={firstProductAdd}
        className={`${
          itemSelected.quantity === 0
            ? "bg-white border border-gray-500"
            : "bg-red-500 border-red-500"
        } w-48 px-6 outline-none  py-3 rounded-full hover:text-red-600 transition-all select-none font-semibold`}
        {...props}
      >
        {itemSelected.quantity === 0 ? (
          <div className="flex justify-center gap-4">
            <img src={addCartIcon} alt="Cart icon" />
            <span>Add to Cart</span>
          </div>
        ) : (
          <div className="flex justify-between gap-8 text-white">
            <div
              onClick={removeProduct}
              className="flex rounded-full border-2 p-1 hover:text-red-500 hover:bg-white "
            >
              <img src={decrementItemIcon} alt="Decrement icon" />
            </div>
            <span>{itemSelected.quantity}</span>
            <div
              onClick={addProduct}
              className="flex rounded-full border-2 p-1 hover:text-red-500 hover:bg-white "
            >
              <img src={incrementItemIcon} alt="Increment icon" />
            </div>
          </div>
        )}
      </button>
    </>
  );
}

export default ButtonAddToCart;
