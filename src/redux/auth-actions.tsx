export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (personData:any) => {
    return {
        type: 'LOGIN',
        payload: personData
    }
}

export const logout = () => {
    return {
        type: 'LOGIN',
        payload: null
    }
}
