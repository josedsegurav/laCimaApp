import { Link } from "react-router-dom";
import ItemCard from "../item-card/item-card.component";

import "./category-preview.styles.scss"

function CategoryPreview({ title, products }) {

  return (
    // <div className="grid_item item_1" style={{"--img-url":props.imgUrl}}>
    //         <a href=""><h4 className="item_link">{props.name} </h4></a>
    //       </div>

    <div className="category-preview-container">
      <h4>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h4>
      <div className="preview"> 
      {products.filter((_, idx) => idx <4)
      .map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
      </div>
      {/* <img className="item_1" src={imgUrl}></img> */}
    </div>
  );
}

export default CategoryPreview;
