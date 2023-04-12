import { React, useContext } from "react";
import logo_carrito from "../assets/icons/carrito.png";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Flex,
    Button,
    Image,
    Box,
    Divider
} from "@chakra-ui/react";

import { CartContext } from "../context/ShoppingCartProvider";

import { Link } from "react-router-dom";

const CartWidget = () => {

    const { cart, cartQuantity } = useContext(CartContext);

    console.log("cart::::",cart)

    return (
        <>
            <Flex flexDirection="row-reverse">
                <Popover>
                    <PopoverTrigger>
                        <Button className="shop-icon-button">
                            <p className="text-black">{cartQuantity() || 0}</p>
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
                                (cart.length > 0 ) ? 
                                cart.map((item) => {
                                    return (
                                        <>
                                            <Box key={item.item.id}>
                                                <li
                                                    key={
                                                        item.id 
                                                    }
                                                >
                                                    {item.item.name} x{item.quantity}
                                                </li>
                                                <Divider />
                                            </Box>
                                        </>
                                    );
                                })
                                : ""
                                }
                                <Link to="/cart">
                                    <li key={0} align="center">
                                        <Button
                                            textColor="black"
                                            m={1}
                                            size="sm"
                                        >
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
