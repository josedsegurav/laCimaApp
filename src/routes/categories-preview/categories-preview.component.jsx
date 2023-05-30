import "./categories-preview.styles.scss"
import { useContext, Fragment } from "react";
import { ProductsContext } from "../../context/products.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

function CategoriesPreview() {

  const { productsMap } = useContext(ProductsContext)

  return (
    <section id="products">
      <h2>
        <a href="">Productos</a>
      </h2>
<Fragment>
      {Object.keys(productsMap).map((title) => {
        const products = productsMap[title];
        return <div className="product_grid" key={title}>
        <CategoryPreview  title={title} products={products} />
      </div>
      })}
</Fragment>
      {/* <div className="product_grid">
        {productsItems.map((img) => (
          <ProductsCard key={img.id} name={img.name} imgUrl={img.imgUrl} />
        ))}
      </div> */}
    </section>
  );
}

export default CategoriesPreview;
