import React from "react";
import { Flex, Button, Image } from "@chakra-ui/react";
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

    const carrito = getCarrito()

    return (
        <>
            <Flex flexDirection="row-reverse">
                <Popover>
                    <PopoverTrigger>
                        <Button className="shop-icon-button">
                            <p className="text-black"> {carrito.length} </p>
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
                                {
                                    carrito.forEach((item) => {
                                        return (
                                        <li>{item[0].title}</li>
                                        )
                                    })
                                }
                                <Link to="/cart">
                                    <li align="center"> <Button textColor="black">Ir al carrito </Button> </li>
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
