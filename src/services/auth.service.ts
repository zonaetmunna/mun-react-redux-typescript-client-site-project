import httpReq from "./http.services";

class AuthService{
     async login(payLoad:iLoginData):Promise<iAuthUser>{
          const {data}=await httpReq.post('/login',payLoad);
          return data;

     }

}
export default new AuthService();