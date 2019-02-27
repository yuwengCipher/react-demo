import { RECEIVE_PRODUCTS} from "../actionTypes";
import { combineReducers } from 'redux'

const getAllProducts = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return [
                ...state,
                ...action.products
            ]
        default:
            return state
    }
}
export default combineReducers({
    getAllProducts
})

export const _getAllProducts = state => {
    return state.getAllProducts
}