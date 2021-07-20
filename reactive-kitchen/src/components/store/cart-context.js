import React, { useState } from "react";

const CartContext = React.createContext(
    {
        cartEmpty: false,
        setCartEmpty: (tf) => {},
        isCartEmpty: () => {}
    }
);

export const CartContextProvider = (props) => {

    const [cartEmpty, setTheCartEmpty] = useState(true);

    const setCartEmpty = (tf) => {
        setTheCartEmpty(tf);
    }

    const isCartEmpty = () => {
        return cartEmpty;
    }

    return (
        <CartContext.Provider value={{ cartEmpty: cartEmpty, setCartEmpty: setCartEmpty, isCartEmpty: isCartEmpty}}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;