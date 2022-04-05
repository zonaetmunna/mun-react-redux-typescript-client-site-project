import { cartActionType, cartActionTypes } from './../types';


const cartReducer=(state:iProducts[]=[],action:cartActionType)=>{
     switch (action.type) {
          case cartActionTypes.ADD_TO_CART:
               return [...state,]
     
          case cartActionTypes.REMOVE_FROM_CART:
               return state.filter(item=>item._id!==action.payLoad.id)
          case cartActionTypes.CLEAR_CART:
               return []
          default:
               return state
     }

}

export default cartReducer;