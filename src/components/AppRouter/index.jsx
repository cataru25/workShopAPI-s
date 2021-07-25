import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home';

function AppRouter() {
    return (
        <Fragment>
            <switch>
                <Route path="/" component={Home} />
            </switch>
        </Fragment>
    )
}

export default AppRouter;
