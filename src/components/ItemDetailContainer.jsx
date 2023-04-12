import { React, useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore()
        const item = doc(db,'products',id) 

        getDoc(item).then((snapshot) => {
            if(snapshot.exists()){
                const docs = {id: id , ... snapshot.data()}
                setProduct(docs)
            }
        })
    }, [id]);

    return (
        <>
            <Flex
                justifyContent="center"
                alignItems="center"
                borderRadius="10px"
                className="border"
                m={100}
                p={10}
            >
                <ItemDetail item={product} />
            </Flex>
        </>
    );
};

export default ItemDetailContainer;
