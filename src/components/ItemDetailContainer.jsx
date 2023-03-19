import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const getProducts = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/albums"
        );
        const data = await response.json();
        return data;
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((product) => setProducts(product));
    }, []);

    const item = products.filter((product) => product.id == id);

    return (
        <>
            <Flex
                justifyContent="center"
                alignItems="center"
                borderRadius="10px"
                className="border"
                m={100}
                p={10}
            >
                <ItemDetail item={item} />
            </Flex>
        </>
    );
};

export default ItemDetailContainer;
