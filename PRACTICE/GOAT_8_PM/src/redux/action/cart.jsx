import { GET_CARTS } from "../constant";

export const getCarts=(limit)=>{
    return{
        type:GET_CARTS,
        limit
    }
}