import { authActionType, authActionTypes } from './../types';


interface iAuthState{
     data:iAuthUser|null,
     state:'success'|'pending'|'idle'|'err',
     error:string|null
}
const initialState:iAuthState={
     data:null,
     state:'idle',
     error:null
}

const authReducer=(state:iAuthState=initialState,action:authActionType)=>{
     switch (action.type) {
          case authActionTypes.LOGIN_SUCCESS:
               return{
                    data:action.payLoad,
                    state:'success',
                    error:null
               }
          case authActionTypes.LOGIN_pending:
               return{
                    data:null,
                    state:'pending',
                    error:null
               }
          case authActionTypes.LOGIN_failed:
               return{
                    data:null,
                    state:'err',
                    error:action.payLoad
               }
          case authActionTypes.LOGOUT:
               return initialState;
     
          default:
               return state
     }

}

export default authReducer;