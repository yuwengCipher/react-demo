import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

class ProductDetail extends Component {
    render() {
        const { products, match:{params: {id}} } = this.props;
        let productName = '数据丢失'
        try {
            productName = products.filter(item => Number(item.id) === Number(id))[0].title
        } catch (e) {

        }
        return (
            <div>
                <h1>This Is Detail</h1>
                <p>it is {productName}</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({...state.products})
export default connect(mapStateToProps)(ProductDetail)