import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const {products, setProducts} = props
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      description,
    };
    axios
      .post("http://localhost:8000/api/products", newProduct)
      .then((response) => setProducts([...products, response.data]))
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors)
      })

      setTitle('')
      setPrice('')
      setDescription('')
  };
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Product Form</h2>
      <div className="form-div">
        <label>Title:{" "}</label>
        {
          errors.title ?
          <span className="error-text">{errors.title.message}</span>
          : null
        }
        <input
          className="form-input"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-div">
        <label>Price:{" "}</label>
        <input
          className="form-input"
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div className="form-div">
        <label>Description:{" "}</label>
        <input
          className="form-input"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default Form;
