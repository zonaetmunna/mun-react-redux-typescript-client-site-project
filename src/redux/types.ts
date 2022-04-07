

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

// auth types
export enum authActionTypes{
     LOGIN_SUCCESS='login/success',
     LOGIN_pending='login/pending',
     LOGIN_failed='login/failed',
     LOGOUT='logout'
}
export interface loginSuccess{
     type:authActionTypes.LOGIN_SUCCESS,
     payLoad:iAuthUser
     
}
export interface loginPending{
     type:authActionTypes.LOGIN_pending,
     
}
export interface loginFailed{
     type:authActionTypes.LOGIN_failed,
     payLoad:string
}
export interface logout{
     type:authActionTypes.LOGOUT
}
export type authActionType=loginSuccess|loginPending|loginFailed|logout;