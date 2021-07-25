import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/index';
import Swapi from '../../pages/Swapi/index';
import Pokemon from '../../pages/Pokemon/index';
import RickAndMorty from '../../pages/RickAndMorty/index';
import Footer from '../Footer';
import Header from '../Header/index';
// import NotFound from '../NotFound';
import './AppRouter.css';

function AppRouter() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/swapi" component={Swapi} />
                <Route path="/pokemon" component={Pokemon} />
                <Route path="/rickAndMorty" component={RickAndMorty} />
                {/* <Route component={NotFound} /> */}
            </Switch>
            <Footer />
        </Fragment>
    );
}

export default AppRouter;
