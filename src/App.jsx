import "./index.css";
import { React } from "react";

import { ChakraProvider, Flex } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {

    return (
        <>
            <ChakraProvider>
                <BrowserRouter>
                    <NavBar />

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/catalogue" element={<ItemListContainer />} />
                        <Route exact path="/catalogue/:category" element={<ItemListContainer />} />
                        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

                        <Route exact path="/cart" element = {<Cart />}/>
                        <Route exact path="*" element= {<Error />}> </Route>
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </ChakraProvider>
        </>
    );
};

export default App;
