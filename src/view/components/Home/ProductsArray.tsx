import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../Common/ProductCard';

const ProductsArray = ({products}:{products:iProducts[]}) => {
     const navigate=useNavigate();

     const handleClicked=(id:string|undefined):void=>{
          navigate('/product'+id)
     }

     return (
          <div>
               {
                    products.map(product=><ProductCard product={product} handleClicked={handleClicked}></ProductCard>)
               }
          </div>
     );
};

export default ProductsArray;