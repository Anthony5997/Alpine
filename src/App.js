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
import Conduite from './redux/components/Equipments/Conduite';
import Confort from './redux/components/Equipments/Confort';
import Design from './redux/components/Equipments/Design';
import EquipmentExterieur from './redux/components/Equipments/EquipmentExterieur';
import EquipmentInterieur from './redux/components/Equipments/EquipmentInterieur';
import Media from './redux/components/Equipments/Media';
import Security from './redux/components/Equipments/Security';
import Exterieur from "./redux/components/Accessories/Exterieur";
import Garage from "./redux/components/Accessories/Garage";
import Interieur from "./redux/components/Accessories/Interieur";
import Multimedia from "./redux/components/Accessories/Multimedia";
import Transport from "./redux/components/Accessories/Transport";

const App = () => (

  <Provider store={store} > 
    <main> 
      <Navbar 
          alignLinks="right"
          brand={<a className="brand-logo center-align" id ='logo' href="/"><img src='/AlpineCars_app-images/sources-homepage/logo/logo-white.png' alt="logo"></img></a>}
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
          <Route path='/Conduite' exact component={Conduite}/>
          <Route path='/Confort' exact component={Confort}/>
          <Route path='/Design' exact component={Design}/>
          <Route path='/EquipmentExterieur' exact component={EquipmentExterieur}/>
          <Route path='/EquipmentInterieur' exact component={EquipmentInterieur}/>
          <Route path='/Media' exact component={Media}/>
          <Route path='/Security' exact component={Security}/>
          <Route path='/Exterieur' exact component={Exterieur}/>
          <Route path='/Garage' exact component={Garage}/>
          <Route path='/Interieur' exact component={Interieur}/>
          <Route path='/Multimedia' exact component={Multimedia}/>
          <Route path='/Transport' exact component={Transport}/>
          
        </Router>  
    </main> 
     
  </Provider>
)

export default App;