import React from "react";

import productsItems from "../productsItems"

function ProductsCard({ name, imgUrl }) {
  return (
    // <div className="grid_item item_1" style={{"--img-url":props.imgUrl}}>
    //         <a href=""><h4 className="item_link">{props.name} </h4></a>
    //       </div>

    <div className="grid_item">
      <h4 className="item_link">{name} </h4>
      <img className="item_1" src={imgUrl}></img>
    </div>
  );
}

export default ProductsCard;
