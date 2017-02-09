import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from "./App";
import Game from "./Game";
import LoginPage from "./LoginPage";
import Store from "./Store";



    /*<Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={LoginPage}/>
            <Route path="/Game" component={Game}/>
        </Route>
    </Router>*/
render(
    
    (
    <Provider store = {Store}><Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={LoginPage}/>
            <Route path="/Game" component={Game}/>
        </Route>
    </Router>
        <App />
    </Provider>
    )
,document.getElementById("root"));
