import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Form from '../components/Form';
import ProductList from '../components/ProductList';

export default function Main() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId) );
    }

    return (
        <div>
            <Form products={products} setProducts={setProducts} />
            <hr />
            <ProductList products={products} removeFromDom={removeFromDom} />
        </div>
    )
}
