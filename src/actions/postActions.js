import {
    ADD_CONTACT,
} from './types';


export const addContact = postData =>{
    return { 
        type: ADD_CONTACT,
        payload: postData
    }
};