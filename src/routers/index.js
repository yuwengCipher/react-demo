import React from 'react'
import { Route } from 'react-router-dom'
import Products from '../components/Products'
import Home from '../components/Home'
import ProductDetail from '../components/ProductDetail'

const routes = [
    {
        name: '首页',
        link: '/',
        exact: true,
        component: Home
    },
    {
        name: '产品页',
        link: '/Products',
        exact: true,
        component: Products
    },
    {
        name: '产品详情页',
        link: '/Products/Detail/:id',
        exact: false,
        component: ProductDetail
    },
]

/**
 * 创建路由组件
 * @param           routes
 * @returns         compoenent
 * @constructor
 */
function CreateRouters(routes) {
    return () => {
        return routes.map((item) =>{
            return(
                <Route
                    exact={item.exact}
                    key={item.name}
                    path={item.link}
                    component={item.component}
                />
            )
        })
    }
}

export default CreateRouters(routes)