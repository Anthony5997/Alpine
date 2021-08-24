import React from "react";
import { connect } from "react-redux";
import { Row, Col } from 'react-materialize';
import { getVersion, getResJson } from "../actions";
import Configurator from "./Configurator";
import { Link } from 'react-router-dom';

 
const Versions = ({state, getVersion, getResJson}) => {
console.log(state)

    const onChange = (version) => {
      getVersion(version)
      getResJson(version)
    
    }

return(
    <div>
      { state.version === null &&
        <Row className='choiseVersion'>
          <Link to= "/Configurateur" onClick={()=>onChange('Pure')}>
          <Col s={12} m={6}>
            <img src={state.photoPure}></img>
          </Col>
          </Link>
          <Link to= "/Configurateur" onClick={()=>onChange('Legende')}>
          <Col s={12} m={6}>
            <img src={state.photoLegende}></img>
          </Col>
          </Link>
        </Row>
      }
    
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state
    }
}
const mapDispatchToProps = dispatch => {
    return{
      getVersion:(choseVersion)=> dispatch(getVersion(choseVersion)),
      getResJson:(version)=> dispatch(getResJson(version)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Versions)