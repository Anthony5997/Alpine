import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Menu = ({state}) => {

    function selectColor(){

        return( alert("Selectionné une couleur en premier"))
    }

return(
    <div>
        {selectColor}
        <div className='linkMenu'><Link to= "/Couleur"> Couleur <i class="fas fa-palette"></i></Link></div>
        {state.currentSelection.color !== null &&
            <div className='linkMenu'><Link to= "/Jantes"> Jantes <i class='far fa-futbol'></i></Link></div>
        }
         {state.currentSelection.color === null &&
            <div onClick={() => selectColor()}className='linkMenu-disable'><Link disabled to= "/Jantes"> Jantes <i class='far fa-futbol'></i></Link></div>
        }
        <div className='linkMenu'><Link to= "/Sellerie"> Sellerie <i class="fas fa-couch"></i></Link></div>
        <div className='linkMenu'><Link to= "/Equipements"> Equipements <i class="fas fa-cogs"></i></Link></div>
        <div className='linkMenu'><Link to= "/Accessories"> Accessoires <i class='fas fa-box-open'></i></Link></div>
        <div className='linkMenu'><Link to= "/Récapitulatif"> Récapitulatif <i class='fas fa-clipboard-list'></i></Link></div>
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)