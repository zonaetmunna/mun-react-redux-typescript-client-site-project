import { addToCart, cartActionTypes, clearCart, removeFromCart } from "../types"




export const add_to_cart=(payLoad:iProducts):addToCart=>{
     return{
          type:cartActionTypes.ADD_TO_CART,
          payLoad:payLoad
     }

}

export const remove_from_cart=(id:string):removeFromCart=>{
     return{
          type:cartActionTypes.REMOVE_FROM_CART,
          payLoad:id
     }
}

export const clear_cart=():clearCart=>{
     return{
          type:cartActionTypes.CLEAR_CART
     }
}