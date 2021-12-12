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


    // const deleteThisProduct = (productId) => {
    //     axios.delete(`http://localhost:8000/api/products/${productId}`)
    //       .then((res) => {
    //           console.log(res);
    //           navigate(`/api/products`)
    //     })
    //       .catch(err => console.log(err) )
    //     }

    return (
        <div className="product-details">
            <p>Title: {product.title}</p>
            <p>Price: $ {product.price}</p>
            <p>Description: {product.description}</p>
            <br />
            <Link to={'/api/products'}>Back to products</Link>
            <br />
            {/* <button className="item-button delete" onChange={() => deleteThisProduct} >Delete</button> */}
        </div>
    )
}
export default Detail;
