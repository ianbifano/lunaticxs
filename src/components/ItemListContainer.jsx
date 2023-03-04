import React from "react";
import { Flex } from "@chakra-ui/react";

const ItemListContainer = (props) => {
    return (
        <>
            <Flex justifyContent="center" alignItems="center" m={100} border="1px" borderColor="gray.200" borderRadius="10px">
                <h1 className="title"> {props.greeting} </h1>
            </Flex>
        </>
    );
};

export default ItemListContainer;
