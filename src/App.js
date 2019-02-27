import React, { Component, IndexRoute, Fragment } from 'react';
import './App.css';

import { Router, Route, Redirect, HashRouter } from 'react-router-dom'
import Routers from './routers'

class App extends Component {
    render () {
        return (
            <div className={'App'}>
                <HashRouter>
                    <Fragment>
                        <Route exact path="/home" render={() => (
                            <Redirect to="/" />
                        )} />
                        <Routers></Routers>
                    </Fragment>
                </HashRouter>
            </div>
        )
    }
}


export default App;
