import AppContext from "./AppContext";
import propTypes from "prop-types";
import { useState } from "react";

export default function Provider({children}) {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const value = {
        products,
        setProducts,
        cartItems,
        setCartItems,
    }
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}
Provider.propTypes ={
    children: propTypes.any,
}.isRequired;