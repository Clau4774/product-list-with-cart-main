import React from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import { CartItemType } from "./interfaces";

function App() {
  return (
    <div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
