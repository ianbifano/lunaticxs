import React from "react";
import { Flex, Button, Image, Divider } from "@chakra-ui/react";
import logo_carrito from "../assets/icons/carrito.png";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const CartWidget = () => {
    function getCarrito() {
        let carrito = [];
        if (localStorage.getItem("carrito")) {
            carrito = JSON.parse(localStorage.getItem("carrito"));
        } else {
            carrito = [];
        }
        return carrito;
    }

    const carrito = getCarrito();

    function getTotal(carrito){
        let total = 0
        carrito.forEach((item) => {
            total = total + item[1]
        })

        return total
    }

    return (
        <>
            <Flex flexDirection="row-reverse">
                <Popover>
                    <PopoverTrigger>
                        <Button className="shop-icon-button">
                            <p className="text-black"> {getTotal(carrito)} </p>
                            <Image className="shop-icon" src={logo_carrito} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader align="center">
                            Items Cargados
                        </PopoverHeader>
                        <PopoverBody>
                            <ul className="none-style-list" align="right">
                                {carrito.map((item) => {
                                    return (
                                        <>
                                            <li key={item[0].id}>
                                                {item[0].title} x{item[1]}
                                            </li>
                                            <Divider />
                                        </>
                                    );
                                })}
                                <Link to="/cart" >
                                    <li align="center">
                                        <Button textColor="black" m={1} size="sm">
                                            Ir al carrito
                                        </Button>
                                    </li>
                                </Link>
                            </ul>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
        </>
    );
};

export default CartWidget;
