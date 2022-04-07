// cart products
interface iProducts{
     _id?:string,
     name:string,
     category:string,
     description:string,
     image:string,
     price:number,
     store:number,
}

// auth 
interface iRegisterData{
     name:string,
     email:string,
     password:string,
     password2:string
}
interface iLoginData{
     email:string,
     password:string
}
interface iAuthUser{
     name:string,
     email:string,
     id:string,
     role:string,
     status:string,
     token:string
}