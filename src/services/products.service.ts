import httpReq from "./http.services";

class ProductsService{
     async getAllProducts():Promise<iProducts[]>{
          const {data}=await httpReq.get('/product');
          return data     
     }

     async getProductById(id:string):Promise<iProducts>{
          const {data}=await httpReq.get('product'+id);
          return data;
     }
}

export default new ProductsService();