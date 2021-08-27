import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';
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
          <Col s={12} m={6}> 
          <Link to='/Configurateur' onClick={()=>onChange('Pure')}>
            <Card
            header={<CardTitle image={state.photoPure} reveal waves="light"/>}
            title="Pure"
            >
            <p>
                Configurer
            </p>
            </Card>
            </Link>
          </Col>

          <Col s={12} m={6}>
          <Link to='/Configurateur' onClick={()=>onChange('Legende')}>
            <Card
            header={<CardTitle image={state.photoLegende} reveal waves="light"/>}
            title="Legende"
            >
            <p>
                Configurer
            </p>
            </Card>
            </Link>
          </Col>
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