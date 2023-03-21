import React from "react";

import { Flex, Wrap } from "@chakra-ui/react";

import Item from "./Item";

const ItemList = ({products} ) => {

    return (
        <>
            <Wrap justify="center" spacing={10}>
                {
                    products.map((item) => {
                        return (<Item 
                            key={item.id}
                            title={item.title}
                            userId={item.userId}
                            id={item.id}
                        />
                    )})
                }   
            </Wrap>
        </>
    );
};

export default ItemList;
