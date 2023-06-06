import "./products.styles.scss"
import ProductsCard from "../../components/productscard/ProductsCard";
import productsItems from "../../productsItems";
import { Link } from "react-router-dom";

function Products() {

  return (
    <section id="products" className="products-section">
      <h2>
        <Link to="/shop">Productos</Link>
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
