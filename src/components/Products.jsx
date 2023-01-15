import React from "react";
import ProductsCard from "./ProductsCard";
import productsItems from "../productsItems";

function Products() {
  return (
    <section id="products">
      <h2>
        <a href="">Productos</a>
      </h2>
      <div className="product_grid">
        {productsItems.map((img) => (
          <ProductsCard key={img.id} name={img.name} imgUrl={img.imgUrl} />
        ))}
      </div>
    </section>
  );
}

export default Products;
