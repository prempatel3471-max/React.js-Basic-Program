//Reducer.jsx


import { DECREMENT, INCREMENT } from "./ActionType";

let initialState = {
    count : 0
}

export function Reducer(state = initialState,{type,payload})
{
    switch(type)
    {
        case INCREMENT :
            return {count :state.count + payload}
        
        case DECREMENT :
            return {count :state.count - payload}

        default :
            return state
        
    }
}