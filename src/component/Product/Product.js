import React from 'react';
import { AddToCartLocalStore } from '../LocatStoreAddToCart/AddToCardLocalStore';
import './Product.css';
const Product = (props) => {
    const {title,description,image,id}=props.product
    // console.log(props)
    return (
        <div className='col'>
            <div className="card  h-100 cardImg">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0,100)}...</p>
                </div>
                <div className="card-footer">
                <button onClick={()=>AddToCartLocalStore(id)} className="btn btn-primary">AddToCart</button>

                </div>
            </div>
        </div>
    );
};

export default Product;