import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getEquipementPannel } from "../../actions";


const Equipments = ({state, getEquipementPannel}) => {


return(
  
    <div className="router-equipement">
        <div className="router-item" id={state.equipementPannel === "conduite" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("conduite")} to= "/Conduite"><i class="fas fa-car"></i></Link></div>
        <div className="router-item" id={state.equipementPannel === "confort" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("confort")} to= "/Confort"><i class="fas fa-couch"></i></Link></div>
        <div className="router-item" id={state.equipementPannel === "design" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("design")} to= "/Design"><i class="fas fa-pencil-ruler"></i></Link></div>
        <div className="router-item" id={state.equipementPannel === "equipementExterieur" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("equipementExterieur")} to= "/EquipmentExterieur"><i className='fas fa-box-open'></i></Link></div>
        <div className="router-item" id={state.equipementPannel === "equipementInterieur" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("equipementInterieur")} to= "/EquipmentInterieur"><i class="fas fa-atlas"></i></Link></div>
        <div className="router-item" id={state.equipementPannel === "media" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("media")} to= "/Media"><i class="fas fa-photo-video"></i></Link></div>
        <div className="router-item" id={state.equipementPannel === "security" ? "pannelSelected" : ""}><Link onClick={()=> getEquipementPannel("security")} to= "/Security"><i class="fas fa-shield-alt"></i></Link></div>
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getEquipementPannel: (data)=> dispatch(getEquipementPannel(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Equipments)