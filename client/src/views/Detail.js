import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from "@reach/router";

const Detail = (props) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct({
                ...res.data
            }))
    }, [props.id])

    return (
        <div className="product-details">
            <p>Title: {product.title}</p>
            <p>Price: $ {product.price}</p>
            <p>Description: {product.description}</p>
            <br />
            <Link to={'/api/products'}>Back to products</Link>
        </div>
    )
}
export default Detail;
