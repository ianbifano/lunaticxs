import React, { useContext, useEffect } from "react";
import {
    Flex,
    Wrap,
    Box,
    Divider,
    Table,
    Tr,
    Td,
    Image,
    Thead,
    Tfoot,
    Button,
    Th,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { CartContext } from "../context/ShoppingCartProvider";

const Cart = () => {
    const { cart, getTotal, removeFromCart, resetCart } =
        useContext(CartContext);

    return (
        <>
            {cart.length == 0 ? (
                <Flex
                    justify="center"
                    spacing={10}
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="10px"
                    className="border"
                    m={100}
                    mt={50}
                    p={10}
                    mb={50}
                >
                    Sin productos en el carrito
                </Flex>
            ) : (
                <Wrap
                    justify="center"
                    spacing={10}
                    justifyContent="center"
                    alignItems="center"
                    m={300}
                    mt={100}
                    p={10}
                    mb={50}
                >
                    <Box w="100%" className="border" p={100} pt={10}>
                        <Box fontSize={30}> Tu Compra </Box>
                        <Table mt={5}>
                            <Thead textColor="white">
                                <Th align="center"></Th>
                                <Th align="center">Nombre</Th>
                                <Th align="center">Precio Unitario</Th>
                                <Th align="center"> Cantidad </Th>
                                <Th align="center"> Subtotal </Th>
                                <Th> </Th>
                            </Thead>
                            {cart.map((item) => {
                                return (
                                    <Tr w="100%" key={item.item.id}>
                                        <Td align="center">
                                            <Image
                                                src={item.item.img}
                                                h={20}
                                                w={50}
                                            />
                                        </Td>
                                        <Td align="center">{item.item.name}</Td>
                                        <Td align="center">
                                            $ {item.item.price}
                                        </Td>
                                        <Td align="center">
                                            x {item.quantity}
                                        </Td>
                                        <Td align="center">
                                            $ {item.quantity * item.item.price}
                                        </Td>
                                        <Td>
                                            <Button
                                                textColor="black"
                                                onClick={() => {
                                                    removeFromCart(
                                                        item.item.id
                                                    );
                                                }}
                                            >
                                                Quitar
                                            </Button>
                                        </Td>
                                    </Tr>
                                );
                            })}
                            <Tfoot>
                                <Tr>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td> TOTAL: </Td>
                                    <Td> $ {getTotal()} </Td>
                                </Tr>
                            </Tfoot>
                        </Table>
                        <Flex direction="row-reverse" mt={10}>
                            <Link to="/form">
                                <Button textColor="black" m={2}>
                                    Confirmar Compra
                                </Button>
                            </Link>
                            <Button
                                textColor="black"
                                m={2}
                                onClick={() => resetCart()}
                            >
                                Vaciar Carrito
                            </Button>
                        </Flex>
                    </Box>
                </Wrap>
            )}
        </>
    );
};

export default Cart;
