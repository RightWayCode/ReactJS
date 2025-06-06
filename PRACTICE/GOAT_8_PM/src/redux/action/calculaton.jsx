import { ADD_VALUE, DELETE_VALUE } from "../constant";


export const addValue=(data)=>{
    return {
        type:ADD_VALUE,
        data
    }
}

export const deleteValue=(data)=>{
    return{
        type: DELETE_VALUE,
        data
    }
}