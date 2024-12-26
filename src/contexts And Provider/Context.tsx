import { createContext } from "react";
import useCart from "../customHooks/useCart";
import data from "../data/data.json";

export const appContext = createContext({
  useCart,
  data,
});
