import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Menu = ({}) => {

return(
    <div>
        <div className='linkMenu'><Link to= "/Couleur"> Couleur</Link></div>
        <div className='linkMenu'><Link to= "/Jantes"> Jantes</Link></div>
        <div className='linkMenu'><Link to= "/Sellerie"> Sellerie</Link></div>
        <div className='linkMenu'><Link to= "/Equipements"> Equipements</Link></div>
        <div className='linkMenu'><Link to= "/Accessories"> Accessoires</Link></div>
        <div className='linkMenu'><Link to= "/Récapitulatif"> Récapitulatif</Link></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Menu)