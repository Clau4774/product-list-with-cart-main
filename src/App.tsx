import React from "react";
import "./App.css";
import data from "./data/data.json";
import Cart from "./components/cart/Cart";
import { CartItemType } from "./interfaces";

function App() {
  const item = {
    name: data[0].name,
    price: data[0].price,
    quantity: 1,
  };

  const [cart, setCart] = React.useState([]);

  setCart([...cart, item]);
  return (
    <div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
