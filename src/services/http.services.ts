import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosConfig:AxiosRequestConfig={
     baseURL: 'https://some-domain.com/api/',
     timeout: 1000,
     headers: {'X-Custom-Header': 'foobar'}
}

const instance:AxiosInstance = axios.create(axiosConfig);

class Request{
     async get(url:string):Promise<AxiosResponse>{
         return instance.get(url).then(res=>res.data)
     };
     async post(url:string,body:any):Promise<AxiosResponse>{
          return instance.post(url,body).then(res=>res.data);
     }

}

const httpReq=new Request()

export default httpReq;