import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Home,
    Wrapper,
    Login,
} from 'modules';

const Routes = () => {

    return (
        <Wrapper>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Home} />
            </Switch>
        </Wrapper>
    )
}

export default Routes;