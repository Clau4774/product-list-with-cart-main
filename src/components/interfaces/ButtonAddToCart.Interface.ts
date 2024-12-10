import { ButtonInterface } from "./Button.Interface";
import React from "react";

interface ButtonAddToCartInterface extends ButtonInterface {
  addProduct: typeof React.useState;
}
