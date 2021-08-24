import React from "react";
import { connect } from "react-redux";
import {BrowserRouter as Router,Route,} from "react-router-dom";
import { Link } from 'react-router-dom';
import Exterieur from "./Exterieur";
import Garage from "./Garage";
import Interieur from "./Interieur";
import Multimedia from "./Multimedia";
import Transport from "./Transport";

const Accessories = ({}) => {
        <Router>
          <Route path="/Exterieur" exact component={Exterieur}/>
          <Route path="/Garage" exact component={Garage}/>
          <Route path="/Interieur" exact component={Interieur}/>
          <Route path="/Multimedia" exact component={Multimedia}/>
          <Route path="/Transport" exact component={Transport}/>
        </Router>
return(
    <div >
    Accessories
    <Link to ='/Garage'>garage</Link>
    </div>
)}
const mapStateToProps = state =>{
    return{
        
    }
}
const mapDispatchToProps = dispatch => {
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Accessories)