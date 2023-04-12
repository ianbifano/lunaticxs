import { React, useContext } from "react";

import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    CardFooter,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Item = ({ description, price, stock, name, img, id, alt }) => {
    return (
        <>
            <Link to={`/item/${id}`}>
                <Card className="card" maxW="sm" minW="sm" >
                    <CardBody className="cardbody" justifyItems="center">
                        <Image
                            src={img}
                            alt={alt}
                            h={350}
                            w="100%"
                            borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                            <Heading size="md"> ID: {id}</Heading>
                            <Text> Title: {name}</Text>
                            <Text> Descripcion: {description}</Text>
                            <Text> Precio: $ {price}</Text>
                            <Text> Stock: {stock}</Text>
                        </Stack>
                        <CardFooter justifyContent="center"></CardFooter>
                    </CardBody>
                </Card>
            </Link>
        </>
    );
};

export default Item;
