import { navigate } from "@reach/router";
import React from "react";
import "../App.css";

export default function ProductList(props) {

  return (
    <div>
      {props.products.map((product, index) => {
        return (
          <div className="product-item" key={index}>
            <p>{product.title}</p>
            {/* <p>Price: $ {product.price}</p>
            <p>Description: {product.description}</p> */}
            <button onClick={() => navigate(`/api/products/${product._id}`)} >Product Details</button>
            <button className="item-button edit">Edit</button>
            <button className="item-button delete">Delete</button>
          </div>
        );
      })}
    </div>
  );
}
