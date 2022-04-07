import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from "./reducers/authReducer";



const persistConfig = {
     key: 'root',
     storage,
   }

const rootReducers=combineReducers({
     cart:cartReducer,
     auth:authReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducers)

const store=createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
export const persist=persistStore(store)

export default store;