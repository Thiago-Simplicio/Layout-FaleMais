import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Contrato from './components/ContratoComponents/Contrato';
import Sucesso from './components/ContratoComponents/SucessoContrato/Sucesso'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/contratar" exact component={Contrato}/>
      <Route path="/contratar/sucesso-contratação" exact component={Sucesso}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
