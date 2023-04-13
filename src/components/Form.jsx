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
import { Link } from "react-router-dom";

const Form = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState(0);

    const { cart, getTotal, confirmSale } = useContext(CartContext);

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

    if (orderId) {
        return (
            <Flex justify="center">
                <Text fontSize={20}>
                    Gracias por tu compra.
                    <br></br> Orden: <u> {orderId} </u>{" "}
                </Text>
            </Flex>
        );
    }

    return (
        <>
            <Flex justifyContent="center" mb={30}>
                <Text fontSize={20}>Envia Tu Orden de Compra</Text>
            </Flex>
            <Flex justifyContent="center">
                <Box className="border" p={20} pt={5} borderRadius={10}>
                    <form onSubmit={handleSubmit}>
                        <FormControl m={2}>
                            <FormLabel>Nombre</FormLabel>
                            <Input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                isRequired
                            />
                        </FormControl>
                        <FormControl m={2}>
                            <FormLabel>Mail</FormLabel>
                            <Input
                                type="email"
                                onChange={(e) => setMail(e.target.value)}
                                isRequired
                            />
                        </FormControl>
                        <FormControl m={2}>
                            <FormLabel>Telefono</FormLabel>
                            <Input
                                type="number"
                                onChange={(e) => setPhone(e.target.value)}
                                isRequired
                            />
                        </FormControl>
                        <Flex direction="row-reverse">
                            <Button
                                mb={1}
                                ml={1}
                                type="submit"
                                textColor="black"
                                onClick={() => {
                                    confirmSale();
                                }}
                            >
                                Enviar
                            </Button>
                            <Link to="/cart">
                                <Button mb={1} ml={1} textColor="Black" >Cancelar</Button>
                            </Link>
                        </Flex>
                    </form>
                </Box>
            </Flex>
        </>
    );
};

export default Form;
