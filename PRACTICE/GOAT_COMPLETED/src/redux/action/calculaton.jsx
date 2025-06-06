import { ADD_VALUE, DELETE_VALUE, TOTAL_VALUE } from "../constant";


export const addValue = (value) => {
    return {
        type: ADD_VALUE,
        payload: value
    }
}

export const deleteValue = (value) => {
    return {
        type: DELETE_VALUE,
        payload:value
    }
}

export const totalValue = (value) => {
    return {
        type: TOTAL_VALUE,
        payload:value
    }
}