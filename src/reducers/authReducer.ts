import { initialState } from "./rootReducer";

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export const authInitialState = {
    isAuthenticated: false,
    details: {
        "idToken": "",
        "email": ""
    }
}

export type authLoginActionType = {
    type: typeof LOGIN_USER
    payload: authStateType
}

export type authLogoutActionType = {
    type: typeof LOGOUT_USER
}

export type authStateType = {
    isAuthenticated: boolean,
    details: any
}

export const authReducer = (state: authStateType, action: authLoginActionType) => {
    switch (action.type) {
        case LOGIN_USER:
            let _state = { ...action.payload }
            return _state
        case LOGOUT_USER:
            return {...authInitialState}
    }
    return {...state}
}

export default authReducer;