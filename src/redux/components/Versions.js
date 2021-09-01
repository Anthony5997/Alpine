import React from "react";
import { connect } from "react-redux";
import { Icon , Button} from 'react-materialize';
import { getVersion, getResJson } from "../actions";
import { Link } from "react-router-dom";

 
const Versions = ({state, getVersion, getResJson}) => {

    const onColor = (version) => {
      getVersion(version)
      getResJson(version)
    
    }

return(
    <div>
      { state.version === null &&
  
        <div className='choiseVersion'>
     
          <Link to='/Configurateur' onClick={()=>onColor('Pure')}>
              <Button
              className='blue-grey lighten-5 black-text pulse'
                
               node="a"
                waves="light"
              >
                Pure <Icon right> settings_applications </Icon>
              </Button>
          </Link>
          <Link to='/Configurateur' onClick={()=>onColor('Legende')}>
          
              <Button
              className='blue-grey darken-4 pulse'
                
                href="/Configurateur"
                node="a"
                waves="light"
              >
                Legende <Icon right> settings_applications </Icon>
              </Button>
            </Link>
         
        </div>
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