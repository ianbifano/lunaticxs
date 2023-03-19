import { React, useState, useEffect } from "react";

import { filter, Flex } from "@chakra-ui/react";

import ItemList from "./ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = () => {
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

    const { category } = useParams();

    let categoryId;

    switch (category) {
        case "remeras":
            categoryId = 1;
            break;
        case "calzado":
            categoryId = 2;
            break;
        case "pantalones":
            categoryId = 3;
        case "accesorios":
            categoryId = 4;
            break;
    }

    /* Por el momento se toma como categoria el user id */

    const filterproducts = products.filter((product) => product.userId == categoryId );

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
                {category ? (
                    <ItemList products={filterproducts} />
                ) : (
                    <ItemList products={products} />
                )}
            </Flex>
        </>
    );
};

export default ItemListContainer;
