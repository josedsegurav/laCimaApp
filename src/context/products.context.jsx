import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../firebase/firebase.utils";

export const ProductsContext = createContext({
    productsMap: {},
});

export const ProductsProvider = ({children}) => {
    
        const [productsMap, setProductsMap] = useState({});

        useEffect(() => {
            const getProductsMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setProductsMap(categoryMap)
            }
            getProductsMap();
        }, [])

        const value = {productsMap};

        return (
        <ProductsContext.Provider value={value} > {children} </ProductsContext.Provider>
    )
    
};

