import React from 'react';
import { render } from "react-dom"
import { Provider } from 'react-redux';
import store from "./store"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Room from './containers/Room';
import NotFound from './containers/NotFound';
import Styles from './app.css';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/room/:room" component={Room} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("main")
);

/*

    <Route exact path="/" component={Home} />
    - exact : path뒤에 오는 url 경로가 정확하게 일치하는 경우(군더더기 없이)

*/