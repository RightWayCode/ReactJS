import { ADD_VALUE, DELETE_VALUE, TOTAL_VALUE } from "../constant";

const initialState = {
    result: ''
};

export const calculateData = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VALUE:
            return { ...state, result: state.result + action.payload };
        case DELETE_VALUE:
            return {...state,result:''}; // Reset the value or handle deletion logic
        case TOTAL_VALUE:
            try {
                return state = {...state,result:eval(state.result).toString()};
            } catch (error) {
               return  state={...state,result:"Error"};
            }
            // return state; // You could implement logic to compute the total
        default:
            return state;
    }
}