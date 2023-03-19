import React from "react";
import { Flex, Wrap } from "@chakra-ui/react";
import Item from "./Item";

const Cart = () => {
    function getCarrito() {
        let carrito = [];
        if (localStorage.getItem("carrito")) {
            carrito = JSON.parse(localStorage.getItem("carrito"));
        } else {
            carrito = [];
        }
        return carrito;
    }

    let carrito = getCarrito();

    return (
        <>
            <Flex justifyContent="center" alignItems="center">
                Tu compra
            </Flex>
            <Wrap justify="center" spacing={10}
                justifyContent="center" alignItems="center" borderRadius="10px"
                className="border" m={100}
                p={10} >
                {carrito.map((item) => {
                    return (
                        <Item
                            key={item[0].id}
                            title={item[0].title}
                            id={item[0].id}
                            quantity={item[1]}
                        />
                    );
                })}
            </Wrap>
        </>
    );
};

export default Cart;
