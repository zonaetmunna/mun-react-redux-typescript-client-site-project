import React from 'react';
import useApi from '../../../hooks/useApi';
import ProductsService from '../../../services/products.service';
import DSlider from '../../components/custome/DSlider';
import ProductsArray from '../../components/Home/ProductsArray';

const Home = () => {
     const {data:products}=useApi<iProducts[]>(ProductsService.getAllProducts)
     return (
          <div>
               <DSlider></DSlider>
               {products&& <ProductsArray products={products}></ProductsArray>}
          </div>
         
     );
};

export default Home;