
// cart types


export enum cartActionTypes{
     ADD_TO_CART='add_to_cart',
     REMOVE_FROM_CART= 'remove_from_cart',
     CLEAR_CART='clear_cart'
}
export interface addToCart{
     type:cartActionTypes.ADD_TO_CART,
     payLoad:iProducts
}
export interface removeFromCart{
     type:cartActionTypes.REMOVE_FROM_CART,
     payLoad:string
}
export interface clearCart{
     type:cartActionTypes.CLEAR_CART
}



export type cartActionType=addToCart|removeFromCart|clearCart;