import {SET_LOGIN} from '../actionTypes/actionTypes';

export const setLogin = (bool) => {
    return {
        type:SET_LOGIN,
        payload:bool
    }
}