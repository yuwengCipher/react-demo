import {RECEIVE_PRODUCTS} from "../actionTypes";

const initalState = {
    products: []
}
const products = (state = initalState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default:
            return state
    }
}
export default products