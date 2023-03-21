import { Flex, Image, Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <>
            <Flex justifyContent="center" mt={100}>
                <Box ml={10} mr={10} >
                    Instagram
                </Box>
                <Box ml={10} mr={10} >
                    Facebook
                </Box>
            </Flex>
        </>
    );
};

export default Footer;
