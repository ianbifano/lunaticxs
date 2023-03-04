import "./index.css";
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
    return (
        <>
            <ChakraProvider>    
                <NavBar />
                <ItemListContainer greeting="Bienvenidos" />
            </ChakraProvider>
        </>
    );
};

export default App;
