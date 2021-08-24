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


const App = () => (
  <Provider store={store} >
   
      <main> 
      <h1 className='title'>ALPINE</h1>
        <Router> 
          <Route path='/' exact component={Home}/>
          <Route path='/Couleur' exact component={Color}/>
          <Route path='/Jantes' exact component={Rims}/>
          <Route path='/Sellerie' exact component={Sealing}/>
          <Route path='/Equipements' exact component={Equipments}/>
          <Route path='/Accessories' exact component={Accessories}/>
          <Route path='/Récapitulatif' exact component={Summary}/>
          <Route path='/Configurateur' exact component={Configurator}/>
        </Router>  
    </main> 
     
  </Provider>
)

export default App;