import { React, useState } from "react";
import { Flex, Button, useToast, Box } from "@chakra-ui/react";

const ItemCount = ({ incart, product, addProduct }) => {
    const [quantity, setQuantity] = useState(incart);

    const toast = useToast();
    return (
        <>
            <Flex>
                <Button
                    textColor="black"
                    onClick={() => {
                        quantity > 1 ? setQuantity(quantity - 1) : "";
                    }}
                >
                    -
                </Button>

                <Button
                    textColor="black"
                    ml={4}
                    mr={4}
                    onClick={() => {
                        if (quantity > 0) {
                            if (addProduct(quantity)) {
                                toast({
                                    position: "bottom-right",
                                    render: () => (
                                        <Box color="black" p={3} bg="white">
                                            Se agrego el producto al carrito
                                        </Box>
                                    ),
                                });
                            } else {
                                toast({
                                    position: "bottom-right",
                                    render: () => (
                                        <Box color="black" p={3} bg="white">
                                            Se modifico la cantidad seleccionada
                                        </Box>
                                    ),
                                });
                            }
                        }
                    }}
                >
                    Add to Cart: {quantity}
                </Button>

                <Button
                    textColor="black"
                    onClick={() => {
                        quantity < product.stock
                            ? setQuantity(quantity + 1)
                            : "";
                    }}
                >
                    +
                </Button>
            </Flex>
        </>
    );
};

export default ItemCount;
