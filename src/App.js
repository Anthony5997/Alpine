import React from 'react';
import { Provider } from "react-redux";
import Versions from './redux/components/Versions';
import store from './redux/store';
import "./styles/index.css";
import Home from './redux/components/Home';
import Color from './redux/components/Color';
import Rims from './redux/components/Rims';
import Sealing from './redux/components/Sealing';
import Equipments from './redux/components/Equipments/Equipments';
import Accessories from './redux/components/Accessories/Accessories';
import Summary from './redux/components/Summary';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Configurator from './redux/components/Configurator';
import { Navbar, Icon, NavItem } from 'react-materialize';

const App = () => (
  <Provider store={store} >
   
      <main> 
      <Navbar 
  alignLinks="right"
  brand={<a className="brand-logo center-align" id ='logo' href="/"><img src='/AlpineCars_app-images/sources-homepage/logo/logo-white.png'></img></a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true,
    fixed: true,
    centerLogo: true
  }}
>
  <NavItem href="/#versions">
    Versions
  </NavItem>
  <NavItem href="components.html">
    Components
  </NavItem>
</Navbar>
        <Router> 
          <Route path='/' exact component={Home}/>
          <Route path='/Couleur' exact component={Color}/>
          <Route path='/Jantes' exact component={Rims}/>
          <Route path='/Sellerie' exact component={Sealing}/>
          <Route path='/Equipements' exact component={Equipments}/>
          <Route path='/Accessories' exact component={Accessories}/>
          <Route path='/Récapitulatif' exact component={Summary}/>
          <Route path='/Configurateur' exact component={Configurator}/>
          <Route path='/Version' exact component={Versions}/>
        </Router>  
    </main> 
     
  </Provider>
)

export default App;