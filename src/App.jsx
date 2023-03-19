import "./index.css";
import { React } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

    return (
        <>
            <ChakraProvider>
                <BrowserRouter>
                    <NavBar />

                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
                        <Route exact path="/:category" element={<ItemListContainer />} />
                        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

                        <Route exact path="/cart" element = {<Cart />}/>
                        <Route exact path="*" element= {<Error />}> </Route>
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </>
    );
};

export default App;
