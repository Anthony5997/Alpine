import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getEquipementPannel } from "../../actions";


const Accessories = ({state, getEquipementPannel}) => {
        
return(
   
    <div className="router-equipement">
        <div className="router-item" id={state.equipementPannel === "exterieur" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("exterieur")} to= "/Exterieur"><i class="fas fa-car"></i></Link></div>
        <div className="router-item" id={state.equipementPannel === "garage" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("garage")} to= "/Garage"><i class="fas fa-warehouse"></i></Link></div>
        <div className="router-item" id={state.equipementPannel === "interieur" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("interieur")} to= "/Interieur"><i class="fas fa-atlas"></i></Link></div>
        <div className="router-item" id={state.equipementPannel === "multimedia" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("multimedia")} to= "/Multimedia"><i class="fas fa-photo-video"></i></Link></div>
        <div className="router-item" id={state.equipementPannel === "transport" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("transport")} to= "/Transport"><i class="fas fa-archive"></i></Link></div>
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