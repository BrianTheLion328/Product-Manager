import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "@reach/router";

const Update = (props) => {
    const {id} = props;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDescription(response.data.description);
            })
            .catch(err => console.log(err.response))
    }, [id])


    const updateProduct = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description,
        })
            .then(res => console.log(res))

        setTitle('')
        setPrice('')
        setDescription('')
    }

    return (
    <div>
        <h1>Update a product</h1>
        <form onSubmit={updateProduct} >
            <div>
                <label>Title: </label>
                <br />
                <input type="text" name="title" value={title} onChange={ (e) => { setTitle(e.target.value) } } />
            </div>
            <div>
                <label>Price: </label>
                <br />
                <input type="text" name="price" value={price} onChange={ (e) => { setPrice(e.target.value) } } />
            </div>
            <div>
                <label>Description:  </label>
                <br />
                <input type="text" name="description" value={description} onChange={ (e) => {setDescription(e.target.value) } } />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
        <br />
        <div>
            <Link to={'/api/products'}>Back to products</Link>
        </div>
    </div>
    )



}

export default Update;
