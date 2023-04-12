import React from "react";

import { Wrap } from "@chakra-ui/react";

import Item from "./Item";

const ItemList = ({products} ) => {

    return (
            <>
                <Wrap justify="center" spacing={10}>
                    {
                        products.map((item) => {
                            return (<Item 
                            key={item.getId}
                            name={item.name}
                            price={item.price}
                            img={item.img}
                            alt={item.alt}
                            description={item.description}
                            stock={item.stock}
                            id={item.id}
                        />
                    )})
                }   
            </Wrap>
        </>
    );
};

export default React.memo(ItemList);
