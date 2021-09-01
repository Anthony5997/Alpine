import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getEquipementPannel } from "../../actions";


const Accessories = ({state, getEquipementPannel}) => {
    
    return(
       
        <div className="router-equipement">
            <div className="router-item" id={state.equipementPannel === "exterior" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("exterior")} to= "/Exterieur"><i className="fas fa-car"></i></Link></div>
            <div className="router-item" id={state.equipementPannel === "garage" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("garage")} to= "/Garage"><i className="fas fa-warehouse"></i></Link></div>
            <div className="router-item" id={state.equipementPannel === "interior" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("interior")} to= "/Interieur"><i className="fas fa-atlas"></i></Link></div>
            <div className="router-item" id={state.equipementPannel === "multimedia" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("multimedia")} to= "/Multimedia"><i className="fas fa-photo-video"></i></Link></div>
            <div className="router-item" id={state.equipementPannel === "transportAndProtection" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("transportAndProtection")} to= "/Transport"><i className="fas fa-archive"></i></Link></div>
        </div>
    )}
const mapStateToProps = state =>{
    return{
        state : state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getEquipementPannel: (data)=> dispatch(getEquipementPannel(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Accessories)