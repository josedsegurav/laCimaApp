import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/item-card/item-card.component";
import { ProductsContext } from "../../context/products.context";

import "./category.styles.scss"

function Category () {
    const { category } =useParams();
    const { productsMap } = useContext(ProductsContext);
    
    const [products, setProducts] = useState(productsMap[category])

    useEffect(() => {
        setProducts(productsMap[category]);
    }, [productsMap, category])
    
    return (
        <Fragment>
            <div className="category-container">
                {
                products && products.map((product) => (
                    <ItemCard key={product.id} product={product} />
                ))
                }
            </div>
        </Fragment>
    )
}

export default Category;