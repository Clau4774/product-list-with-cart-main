import { AppContext } from "./AppContext";
import useCart from "../customHooks/useCart";
import data from "../data/data.json";

const ContextProvider = ({ children }) => {
  const {
    cart,
    addElement,
    removeElement,
    addQuantity,
    reduceQuantity,
    totalCart,
  } = useCart();

  return (
    <AppContext.Provider
      value={{
        cart,
        addElement,
        removeElement,
        addQuantity,
        reduceQuantity,
        totalCart,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
