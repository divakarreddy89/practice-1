
import { ADD_TO_CART,REMOVE_ITEM } from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        payload: id
    }
}
//remove item action
export const removeItem=(id)=>{
    return {
        type: REMOVE_ITEM,
        payload:{ id }
    }
}
//add qt action
export const editItem=(payload)=>{
    return{
        type: ADD_TO_CART,
        payload
    }
}
