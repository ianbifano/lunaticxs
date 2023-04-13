import { React, useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Button,
    Input,
    Text,
    Box,
} from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartProvider";

const Form = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState(0);

    const { cart, getTotal } = useContext(CartContext);

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();

        const total = getTotal();

        const date = new Date();

        const order = {
            name,
            mail,
            phone,
            items: cart.map((product) => {
                return {
                    id: product.item.id,
                    price: product.item.price,
                    quantity: product.quantity,
                    name: product.item.name,
                };
            }),
            total,
            date,
        };

        addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id);
        });
    };

    const ordersCollection = collection(db, "orders");

    return (
        <>
        <Flex justifyContent="center" mb={30}>
            <Text fontSize={20}>Finaliza Tu Compra</Text>
        </Flex>
            <Flex justifyContent="center">
                <Box className="border" p={20} pt={5} borderRadius={10}>
                    <form onSubmit={handleSubmit}>
                        <FormControl m={2}>
                            <FormLabel>Nombre</FormLabel>
                            <Input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl m={2}>
                            <FormLabel>Mail</FormLabel>
                            <Input
                                type="email"
                                onChange={(e) => setMail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl m={2} >
                            <FormLabel>Telefono</FormLabel>
                            <Input
                                type="number"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </FormControl>
                        <Flex direction="row-reverse">
                            <Button type="submit" textColor="black">
                                Enviar
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Flex>
        </>
    );
};

export default Form;
