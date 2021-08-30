import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Menu = ({state}) => {

    console.log("State menu : ", state);

    let prixTotal = state.accessoriesPrice + state.globalPrice;

    function selectColor(){

        return( alert("Selectionné une couleur en premier"))
    }

    return(
        <div>
            {selectColor}
            <div className='linkMenu'><Link to= "/Couleur"> Couleur <i className="fas fa-palette"></i></Link></div>
            {(state.currentSelection.color !== null) && (state.version === "Pure") &&
                <div className='linkMenu'><Link to= "/Jantes"> Jantes <i className='far fa-futbol'></i></Link></div>
            }
            {(state.currentSelection.color === null) && (state.version === "Pure") &&
                <div onClick={() => selectColor()} className='linkMenu-disable'><Link disabled to= "/Jantes"> Jantes <i className='far fa-futbol'></i></Link></div>
            }
            <div className='linkMenu'><Link to= "/Sellerie"> Sellerie <i className="fas fa-couch"></i></Link></div>
            {state.currentSelection.color !== null &&
                <div className='linkMenu'><Link to= "/Equipements"> Equipements <i className='fas fa-cogs'></i></Link></div>
            }
            {state.currentSelection.color === null &&
                <div onClick={() => selectColor()} className='linkMenu-disable'><Link disabled to= "/Equipements"> Equipements <i className='fas fa-cogs'></i></Link></div>
            }
            {state.currentSelection.color !== null &&
                <div className='linkMenu'><Link to= "/Accessories"> Accessories <i className='fas fa-box-open'></i></Link></div>
            }
            {state.currentSelection.color === null &&
                <div onClick={() => selectColor()} className='linkMenu-disable'><Link disabled to= "/Accessories"> Accessories <i className='fas fa-box-open'></i></Link></div>
            }
            <div className='linkMenu'><Link to= "/Récapitulatif"> Récapitulatif <i className='fas fa-clipboard-list'></i></Link></div>
            {prixTotal  &&
                <div className='linkMenu globalPrice'> Prix globale : {prixTotal} <i className='fas fa-comment-dollar'></i></div>
            }
        </div>
    )
}

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