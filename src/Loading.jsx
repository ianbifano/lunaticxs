import { Spinner, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
    return (
        <>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="black"
                color="white"
                size="xl"
            />
        </>
    );
};

export default Loading;
