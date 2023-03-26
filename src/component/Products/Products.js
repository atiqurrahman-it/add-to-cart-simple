import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const url=`https://fakestoreapi.com/products/`
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className='container-fluid mt-4'>
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {
                  products.map(product=> <Product
                  product={product}
                  key={product.id}
                  > </Product>)
              }
         </div>
        </div>
    );
};

export default Products;