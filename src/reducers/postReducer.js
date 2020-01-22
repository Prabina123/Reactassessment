import {
    ADD_CONTACT
} from '../actions/types';

const initialState = {
    posts: [],
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_CONTACT:
            return {
                posts:[
                    ...state.posts,
                    action.payload  
                ]
            }
        default:
            return state;
    }
   
}