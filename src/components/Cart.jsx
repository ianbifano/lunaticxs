import React from "react";
import { Flex, Wrap, Button, Text } from "@chakra-ui/react";
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
            <Flex justifyContent="center" alignItems="center" mt={100}>
                <Text fontSize="30"> Tu Compra </Text>
            </Flex>
            <Wrap justify="center" spacing={10}
                justifyContent="center" alignItems="center" borderRadius="10px"
                className="border" 
                m={100} mt={50}
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
            <Flex flexDirection="row-reverse" mr={100}>
                <Button textColor="black"> Confirmar Compra </Button>
            </Flex>
        </>
    );
};

export default Cart;
