import { navigate } from "@reach/router";
import React from "react";
import "../App.css";
import axios from 'axios';

export default function ProductList(props) {

  const {products, removeFromDom} = props;

  const deleteProduct = (productId) => {

    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then(res => {
        removeFromDom(productId)
      })
      .catch(err => console.log(err) )
    }


  return (
    <div>
      {products.map((product, index) => {
        return (
          <div className="product-item" key={index}>
            <p>{product.title}</p>
            <button onClick={() => navigate(`/api/products/${product._id}`)} >Product Details</button>
            <button onClick={() => navigate(`/api/products/${product._id}/edit`)} className="item-button edit">Edit</button>
            <button onClick={() => deleteProduct(product._id)} className="item-button delete">Delete</button>
          </div>
        );
      })}
    </div>
  );
}
