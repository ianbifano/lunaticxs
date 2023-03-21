import React from "react";

import { Button, Flex } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Error = ({ errormsg }) => {
    return (
        <>
            <Flex justifyContent="center">
                {errormsg ? errormssg : "PAGE NOT FOUND - Error 404 -"}
            </Flex>
            <Flex justifyContent="center">
                <Link to="/home">
                    <Button> Volver al inicio </Button>
                </Link>
            </Flex>
        </>
    );
};

export default Error;
