import React from 'react';

const ProductCard = ({product,handleClicked}:{product:iProducts,handleClicked:(id:string|undefined)=>void}) => {
     return (
          <div>
               <h1>{product._id}</h1>
               <h1>{product.name}</h1>
               <h1>{product.price}</h1>
               <img src={product.image} alt="" />
               <button onClick={()=>handleClicked}>addToCart</button>
          </div>
     );
};

export default ProductCard;