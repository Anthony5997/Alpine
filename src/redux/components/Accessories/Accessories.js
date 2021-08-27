import React from "react";
import { connect } from "react-redux";
import {BrowserRouter as Router,Route,} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-materialize';
import Exterieur from "./Exterieur";
import Garage from "./Garage";
import Interieur from "./Interieur";
import Multimedia from "./Multimedia";
import Transport from "./Transport";

const Accessories = ({}) => {
        
return(
    <div>
       <Tabs className="tab-demo z-depth-1"
    scope="tabs-22">

        <Tab active  title="Multimédia"
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }} >
            <Multimedia />
        </Tab> 

        <Tab
            options={{ 
                duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Transport">
            <Transport />
        </Tab> 
  
        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Interieur">
            <Interieur />
        </Tab>

        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Extérieur">
            <Exterieur />
        </Tab>

        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Garage">
            {/* <Garage /> */}
        </Tab>
    </Tabs>
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