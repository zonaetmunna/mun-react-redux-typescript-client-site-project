



export const add_to_cart=(payLoad:iProducts)=>{
     return{
          type:'ADD_TO_CART',
          payLoad:payLoad
     }

}

export const remove_from_cart=(id:string)=>{
     return{
          type:'REMOVE_FROM_CART',
          payLoad:id
     }
}

export const clear_cart=()=>{
     return{
          type:'CLEAR_CART'
     }
}