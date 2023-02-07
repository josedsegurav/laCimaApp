import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ItemCard from "../../components/item-card/item-card.component";

import "./shop.styles.scss"

function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ItemCard key={product.id} product={product}></ItemCard>
      ))}
    </div>
  );
}

export default Shop;
