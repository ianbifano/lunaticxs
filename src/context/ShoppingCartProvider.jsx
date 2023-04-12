import { React, createContext, useState } from "react";

export const CartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    function getCarrito() {
        let localCart = [];
        if (localStorage.getItem("cart")) {
            localCart = JSON.parse(localStorage.getItem("cart"));
        } else {
            localCart = [];
        }
        return localCart;
    }

    const [cart, setCart] = useState(getCarrito());

    //agrega al carrito el item y la cantidad seleccionada

    const addToCart = (item, quantity) => {
        if (quantity > 0) {
            let record = {"item": item, "quantity": quantity};

            if (isInCart(item.id)) {
                let prod = cart.find((obj) => obj.item.id == item.id);
                prod.quantity = quantity;

                localStorage.setItem("cart", JSON.stringify(cart));
                let aux = cart
                setCart(cart)
                return false;
            } else {
                localStorage.setItem("cart", JSON.stringify([...cart , record ]));
                setCart([...cart , record ])
                return true;
            }
        }
    };
    console.log(cart);


    //Recibe un id de un item por parametro, y lo elimina del carrito
    const removeFromCart = (id) => {
        /* setCart(cart.filter((item) => item.id !== id)); */
    };

    //recibe un id de un item, sis e encuentra en el carrito retorna true en caso contrario, false
    const isInCart = (id) => {
        return cart.some((item) => item.item.id === id);
    };

    //Vacia el carrito
    const resetCart = () => {
        setCart([]);
    };

    const getTotal = () => {
        let aux = 0;
        console.log(cart)
        cart.forEach((item) => aux = aux + (item.quantity * item.item.price) )
        return aux;
    }

    const cartQuantity = () => {
        let aux = 0;
        console.log(cart)
        cart.forEach((item) => aux = aux + item.quantity )
        return aux;
    };

    return (
        <>
            <CartContext.Provider
                value={{
                    cart,
                    addToCart,
                    removeFromCart,
                    isInCart,
                    cartQuantity,
                    resetCart,
                    getTotal
                }}
            >
                {children}
            </CartContext.Provider>
        </>
    );
};

export default ShoppingCartProvider;
