import React from "react";
import "../App.css";

export default function ProductList(props) {


  return (
    <div>
      {props.products.map((product, index) => {
        return (
          <div className="product-item" key={index}>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button className="item-button edit">Edit</button>
            <button className="item-button delete">Delete</button>
          </div>
        );
      })}
    </div>
  );
}
