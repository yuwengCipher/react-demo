import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeAction from '../../actions';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios'
import './index.css'
import Button from '../button'
import ProductDetail from '../ProductDetail'

const buttonList = [
    {path: 'Home'},
]

class Products extends Component {
    componentWillMount () {
        axios.get('http://djacipher.cn:3389/users').then(res => {
            this.props.actions.receiveProducts(res.data.products)
        })
    }
    render () {
        const products = this.props.products;
        const ProductItem = products.map( (product, index) => (
            <div key={index}>
                <div className={'productItem'}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>x{product.inventory}</p>
                </div>
                <NavLink to={`/Products/Detail/${product.id}`}>go detail</NavLink>
            </div>

        ))
        return (
            <div>
                <h1>This Is Products!</h1>
                <div className={'pathContainer'}>
                    <Button buttonList={buttonList}></Button>
                </div>
                <br/>
                <div className="productContainer">
                    {ProductItem}
                </div>
                <div>
                    <Route path="/Detail/:id" exact component={ProductDetail} />
                </div>
            </div>
        )
    }
}

Products.propTypes = {
    product: PropTypes.array.isRequired,
    receiveProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({...state.products})
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(homeAction, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
