import React, { Component } from 'react'
import './index.css'
import Button from '../button'

const buttonList = [
    {path: 'Products'},
]
class Home extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <h1>This Is Home!</h1>
                <div className={'pathContainer'}>
                    <Button buttonList={buttonList}></Button>
                </div>
            </div>
        )
    }
}

export default Home