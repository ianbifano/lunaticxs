import { Flex, Image, Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <>
            <Flex justifyContent="center" mt={100}>
                <Box ml={10} mr={10} >
                    <a href="https://www.instagram.com/lunaticxs.__/">Instagram</a>
                </Box>
            </Flex>
        </>
    );
};

export default React.memo(Footer);
