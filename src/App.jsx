import "./index.css";
import { React } from "react";

import { ChakraProvider, Flex } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ShoppingCartProvider from "./context/ShoppingCartProvider";
import CartContainer from "./components/CartContainer";
import Form from "./components/Form"

const App = () => {
    return (
        <>
            <ChakraProvider>
                <BrowserRouter>
                    <ShoppingCartProvider>
                        <NavBar />

                        <Routes>
                            <Route exact path="/" element={<Home />} />

                            <Route
                                exact
                                path="/catalogue"
                                element={<ItemListContainer />}
                            />
                            <Route
                                exact
                                path="/catalogue/:category"
                                element={<ItemListContainer />}
                            />

                            <Route
                                exact
                                path="/item/:id"
                                element={<ItemDetailContainer />}
                            />

                            <Route
                                exact
                                path="/cart"
                                element={<CartContainer />}
                            />

                            <Route
                                exact
                                path="/form"
                                element={<Form />}
                            />

                            <Route exact path="*" element={<Error />} />
                        </Routes>
                    </ShoppingCartProvider>

                    <Footer />
                </BrowserRouter>
            </ChakraProvider>
        </>
    );
};

export default App;
