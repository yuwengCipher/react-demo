import api from '../api'
import * as types from '../actionTypes'
import axios from 'axios'

export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

// 获取所有产品
export const getProducts = () => dispatch => {
    axios.get('http://djacipher.cn:3389/users').then(res => {
        dispatch(receiveProducts(res.data.products))
    })
}
