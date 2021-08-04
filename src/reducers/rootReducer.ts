import { cartActionType, cartInitialState, cartReducer } from './cartReducer'
import combineReducers from './combineReducers'
import { layoutActionType, layoutInitialState, layoutReducer } from './layoutReducer'
import { authReducer, authInitialState, authLoginActionType, authLogoutActionType } from './authReducer'

export type rootActionType = layoutActionType | cartActionType | authLoginActionType | authLogoutActionType

export const initialState = {
  layout: layoutInitialState,
  cart: cartInitialState,
  auth: authInitialState
}

export const rootReducer = combineReducers({
  layout: layoutReducer,
  cart: cartReducer,
  auth: authReducer
})