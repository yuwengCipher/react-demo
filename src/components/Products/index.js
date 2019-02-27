import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, NavLink } from 'react-router-dom';
import receiveProducts  from '../../reducers'
import axios from 'axios'
import './index.css'
import Button from '../button'
import ProductDetail from '../ProductDetail'

const buttonList = [
    {path: 'Home'},
    {path: 'Carts'}
]

class Products extends Component {
    constructor (props) {
        super(props)
        console.log(props);
    }
    componentWillMount () {
        const { store } = this.context;
        console.log(this.context);
        console.log(store);
        axios.get('http://djacipher.cn:3389/users').then(res => {
            console.log(res);
            // this.props.store.dispatch(receiveProducts(res.data.products))
        })
    }
    render () {
        const { products } = this.props
        return (
            <div>
                <h1>This Is Products!</h1>
                <div className={'pathContainer'}>
                    <Button buttonList={buttonList}></Button>
                </div>
                <div>
                    <Route path="/detail/:id" exact component={ProductDetail} />
                </div>
            </div>
        )
    }
}
// const mapStateToProps = state => {
//     console.log(state);
//     return {products: _getAllProducts(state.products)}
// }
// const mapStateToProps = state => ({
//     products: getAllProducts(state.products)
// })
// export default connect(mapStateToProps)(Products)
export default Products