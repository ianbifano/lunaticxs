import React from "react";

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

const ItemDetail = ({ item }) => {
    return (
        <>
            {item.map((product) => {
                return (
                    <Card key={product.id} className="card" maxW="sm" minW="sm">
                        <CardBody className="cardbody">
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                            />
                            <Stack mt="6" spacing="3">
                                <Heading size="md">Identificador: {product.id}</Heading>
                                <Text>{product.title}</Text>
                                <Text>UserId: {product.userId}</Text>
                                <Text>Precio Stock Color Talle Otro</Text>
                            </Stack>

                            <CardFooter justifyContent="center">
                                <ItemCount product={product} />
                            </CardFooter>
                        </CardBody>
                    </Card>
                );
            })}
        </>
    );
};

export default ItemDetail;
