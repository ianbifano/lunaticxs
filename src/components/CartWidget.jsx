import React from "react";
import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
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

const CartWidget = () => {
    return (
        <>
            <Flex flexDirection="row-reverse">
                <Popover>
                    <PopoverTrigger>
                        <Button className="shop-icon-button">
                            <p className="text-black"> 3 </p>
                            <Image
                                className="shop-icon"
                                src="./src/assets/carrito.png"
                            />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader align="center">Items Cargados</PopoverHeader>
                        <PopoverBody>

                            <ul className="none-style-list" align="right">
                                <li> Item 1 </li>
                                <li> Item 2 </li>
                                <li> Item 3 </li>
                            </ul>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
        </>
    );
};

export default CartWidget;
