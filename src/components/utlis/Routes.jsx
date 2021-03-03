import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../Home"
import PageNotFound from "../pages/PageNotFound"
import Post from "../pages/Post"

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/post" component={Post} />
                <Route path="*" component={PageNotFound} />
            </Switch>
            </BrowserRouter>
        )
    }
}


