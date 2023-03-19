import { React, useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import Error from "./Error";
import { Link } from "react-router-dom";

const ItemCount = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    function getCarrito() {
        let carrito = [];
        if (localStorage.getItem("carrito")) {
            carrito = JSON.parse(localStorage.getItem("carrito"));
        } else {
            carrito = [];
        }
        return carrito;
    }

    function addToCart(product, quantity) {
        if (quantity > 0) {
            let compra = [];
            let carrito = getCarrito();

            /* Verifico si el producto ya se encuentra en el carrito, en caso de que se encuentre solo mofiico la cantidad seleccionada */
            if (carrito.find((compra) => compra[0].id == product.id)) {
                let prod = carrito.find((compra) => compra[0].id == product.id);
                prod[1] = quantity;
                localStorage.setItem("carrito", JSON.stringify(carrito));
            } else {
                compra.push(product);
                compra.push(quantity);
                carrito.push(compra);
                localStorage.setItem("carrito", JSON.stringify(carrito));
            }
        }
    }

    return (
        <>
            <Flex>
                <Button
                    textColor="black"
                    onClick={() => setQuantity(quantity - 1)}
                >
                    -
                </Button>
                <Link to="/">
                    <Button
                        textColor="black"
                        ml={4}
                        mr={4}
                        onClick={() => {
                            addToCart(product, quantity);
                        }}
                    >
                        Add to Cart: {quantity}
                    </Button>
                </Link>
                <Button
                    textColor="black"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    +
                </Button>
            </Flex>
        </>
    );
};

export default ItemCount;
