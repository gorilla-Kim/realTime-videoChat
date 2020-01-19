import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/room/:room" component={Room} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
)