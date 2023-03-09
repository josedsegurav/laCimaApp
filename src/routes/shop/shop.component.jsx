import { Route, Routes } from "react-router-dom";

import "./shop.styles.scss"
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";

function Shop() {


  return (
    // <div className="products-container">
    //   {products.map((product) => (
    //     <ItemCard key={product.id} product={product}></ItemCard>
    //   ))}
    // </div>
<Routes>
  <Route index element={<CategoriesPreview />} />
  <Route path=":category" element={<Category />} />
</Routes>
    
  );
}

export default Shop;
