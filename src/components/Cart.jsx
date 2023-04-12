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
import Item from "./Item";
import { CartContext } from "../context/ShoppingCartProvider";

const Cart = () => {
    const { cart, getTotal } = useContext(CartContext);

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
                    Empty
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
                                                w={35}
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
                                            <Button textColor="black">
                                                Quitar
                                            </Button>
                                        </Td>
                                    </Tr>
                                );
                            })}
                            <Tfoot>
                                <Td></Td>
                                <Td></Td>
                                <Td></Td>
                                <Td></Td>
                                <Td> TOTAL: </Td>
                                <Td> $ {getTotal()} </Td>
                            </Tfoot>
                        </Table>
                        <Flex justify="row-reverse" mt={10}>
                            <Button textColor="black"> Confirmar Compra </Button>
                        </Flex>
                    </Box>
                </Wrap>
            )}
        </>
    );
};

export default Cart;
