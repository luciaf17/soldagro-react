import {types} from '../types/types';

export const authInitState = () => 
localStorage.getItem("auth") 
? JSON.parse(localStorage.getItem("auth")) 
: {
    isAuthenticated: false,
    user: null,
    token: ''
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case types.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};
