import React from "react";

import {
    Button,
    Flex,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
} from "@chakra-ui/react";

/* import image_autoexistente from "../assets/products/tonoAutoexistente.jpeg";
import image_Electrico from "../assets/products/tonoElectrico.jpeg";
import image_entonado from "../assets/products/tonoEntonado.jpeg"; */

import ItemDetailContainer from "./ItemDetailContainer";

import { Link } from "react-router-dom";

const Item = ({ title, id, quantity }) => {
    return (
        <>
            <Link to={`/item/${id}`}>
                <Card className="card" maxW="sm" minW="sm">
                    <CardBody className="cardbody">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                            <Heading size="md"> Title: {title}</Heading>
                            <Text> Title: {title}</Text>
                            <Text> { quantity ? `Quantity: ${quantity}` : "" } </Text>
                        </Stack>
                        <CardFooter justifyContent="center"></CardFooter>
                    </CardBody>
                </Card>
            </Link>
        </>
    );
};

export default Item;
