import React, { useEffect, useState } from 'react';
import ProductsData from "../../DataBase/Products";
import { Product } from './Product';

export const Shop = () => {

    const [PRODUCTS, SETPRODUCTS] = useState(null);

    const products = ProductsData.map((item) => {

        return (
            <Product pro={item} />
        )
    })
    useEffect(()=>{
        SETPRODUCTS(products)
    }, [products])
    return (
        <>
            
            <div className='Products'>
                {PRODUCTS}
            </div>
        </>
    )
}
