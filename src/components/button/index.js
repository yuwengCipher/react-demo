import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

class Button extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { buttonList } = this.props;
        return (
            buttonList.map((item, index) => {
                return (
                    <Link className={'path'} to={'/' + item.path} key={index}>{item.path}</Link>
                )
            })
        )

    }
}

export default Button