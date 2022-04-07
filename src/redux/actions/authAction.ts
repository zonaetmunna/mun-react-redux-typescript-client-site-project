import { authActionTypes } from './../types';
import { Dispatch } from "redux"
import authService from "../../services/auth.service"
import { authActionType, authActionTypes } from "../types"

/* interface loginActionTypes{
     type:authActionTypes.LOGIN,
     payLoad:iAuthUser
} */

export  const login=(payLoad:iLoginData)=>{
     return (dispatch:Dispatch<authActionType>)=>{
          dispatch({
               type:authActionTypes.LOGIN_pending
          })
          authService.login(payLoad)
          .then(user=>{
               dispatch({
                    type:authActionTypes.LOGIN_SUCCESS,
                    payLoad:user
               })
          })
          .catch(err=>{
               dispatch({
                    type:authActionTypes.LOGIN_failed,
                    payLoad:err?.response?.data?.message
               })
          })
     }
}