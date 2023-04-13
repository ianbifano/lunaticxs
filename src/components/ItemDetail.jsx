import { React, useContext, useState } from "react";

import {
    Flex,
    Card,
    CardBody,
    Image,
    Stack,
    Text,
    Heading,
    CardFooter,
} from "@chakra-ui/react";

import ItemCount from "./ItemCount";
import { CartContext } from "../context/ShoppingCartProvider";

const ItemDetail = ({ item }) => {
    const [sale, setSale] = useState(false);

    const { cart, addToCart, isInCart } = useContext(CartContext);

    const addProduct = (quantity) => {
        addToCart(item, quantity);
        setSale(true);
    };

    let quantity = 1
    if(isInCart(item.id)){
        const prod = cart.find((obj) => obj.item.id == item.id)
        quantity = prod.quantity
    } 

    return (
        <>
            <Card key={item.id} className="card" maxW="sm" minW="sm">
                <CardBody className="cardbody">
                    <Image src={item.img} alt={item.alt} borderRadius="lg" h={300} w="100%" />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{item.name}</Heading>
                        <Text>{item.price}</Text>
                        <Text>Descripcion: {item.description}</Text>
                        <Text>stock: {item.stock}</Text>
                    </Stack>

                    <CardFooter justifyContent="center">
                        <ItemCount incart={quantity} product={item} addProduct={addProduct} />
                    </CardFooter>
                </CardBody>
            </Card>
        </>
    );
};

export default ItemDetail;
