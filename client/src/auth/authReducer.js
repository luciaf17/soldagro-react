import { types } from '../types/types';

export const authInitState = () =>
    localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {
            isAuthenticated: false,
            usuario: null,
            token: ''
        };

export const authReducer = (state, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                usuario: action.payload.username,
                token: action.payload.token
            };
        case types.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                usuario: null,
                token: ''
            };
        default:
            return state;
    }
};
