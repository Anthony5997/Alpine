import React, {useEffect} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';

const Configurator = ({state}) => {
 
return(
    <div>
      {state.version}
      <Row className='configurator'>
          <Col s={12} m={6}>
            <img src={state.photoPure}></img>
          </Col>
          
          <Col s={12} m={6}>
              <div><Link to= "/Couleur"> Couleur</Link></div>
              <div><Link to= "/Jantes"> Jantes</Link></div>
              <div><Link to= "/Sellerie"> Sellerie</Link></div>
              <div><Link to= "/Equipements"> Equipements</Link></div>
              <div><Link to= "/Accessoires"> Accessoires</Link></div>
              <div><Link to= "/Récapitulatif"> Récapitulatif</Link></div>
          </Col>
      </Row>
    </div>
)}
const mapStateToProps = state =>{
    return{
        state: state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Configurator)