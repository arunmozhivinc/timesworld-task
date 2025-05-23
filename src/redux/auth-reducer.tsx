
interface AuthState {
    user: any | null;
}

const initialState: AuthState = {
    user: null,
};

const authReducer = (state = initialState, action: {type:any, payload:any}): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
