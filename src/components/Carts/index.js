import React, { Component } from 'react'
import './index.css'
import Button from '../button'

const buttonList = [
    {path: 'Home'},
    {path: 'Products'}
]

class Carts extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        console.log(this.props.location.query);
        return (
            <div>
                <h1>This Is Carts!</h1>
                <div className={'pathContainer'}>
                    <Button buttonList={buttonList}></Button>
                </div>
            </div>
        )
    }
}

export default Carts