import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/jsx/home';
import ClientRegister from './components/jsx/client-register';
import ProductRegister from './components/jsx/product-register';

export default () => {

    return (
        <Switch>
            <Route path='/' exact>
                <Home title="Qual opção de cadastro desejada?" />
            </Route>
            <Route path='/client' exact>
                <ClientRegister />
            </Route>
            <Route path='/product' exact>
                <ProductRegister />
            </Route> 
        </Switch>
    )
}