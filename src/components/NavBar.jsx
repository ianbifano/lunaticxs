import React from "react";
import CartWidget from "./CartWidget";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import logo from '../assets/lunaticxs.png'; 


const NavBar = () => {
    return (
        <>
            <Flex className="navbar-container" h="6vh" alignItems="center">

                <Flex w="20vw">
                    <a href="./#"><Image src={logo} h="25vh" w="30vw" /></a>
                </Flex>

                <Flex justifyContent="center" className="navbar-list" w="100vw">
                    <ul className="none-style-list">
                        <li className="list-item">
                            <Button className="item-button" variant="link" colorScheme="white">Remerones</Button>
                        </li>
                        <li className="list-item">
                            <Button className="item-button" variant="link" colorScheme="white">Zapatillas</Button>
                        </li>
                        <li className="list-item">
                            <Button className="item-button" variant="link" colorScheme="white">Pantalones</Button>
                        </li>
                        <li className="list-item">
                            <Button className="item-button" variant="link" colorScheme="white">Accesorios</Button>
                        </li>
                    </ul>
                </Flex>

                <Flex flexDirection="column" className="navbar-item" w="20vw">
                    <CartWidget />
                </Flex>
            </Flex>
        </>
    );
};

export default NavBar;
