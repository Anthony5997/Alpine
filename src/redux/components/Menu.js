import React, { useEffect }from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMenu, getEquipementPannel, getStateFromLocalStorage } from "../actions";

const Menu = ({state, getMenu, getEquipementPannel, getStateFromLocalStorage}) => {

    useEffect(async() => {
        await checkState();
      });


    let prixTotal = state.accessoriesPrice + state.globalPrice + state.equipementsPrice;
    function selectColor(){

        return( alert("Selectionné une couleur en premier"))
    }

    const getMenuAndPannel = (menu, pannel) => {

        getMenu(menu);
        getEquipementPannel(pannel);
    }

    const checkState = async() => {
       let test = {};
       test = sessionStorage.getItem("currentConfiguration");

        if(Object.keys(state.jsonVersion).length < 1 || state === null ){
                
            await getStateFromLocalStorage(JSON.parse(test))
        }

    }

    const myFunction = () => {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

return(
    <div>
        <button className="menu-button" onClick={ () => myFunction()}>Menu</button>

        <div id="myDIV">

       
            <div className='linkMenu' id={state.menu === "color" ? "menuSelected" : ""}><Link onClick={()=> getMenu("color")} to= "/Couleur"> Couleur <i class="fas fa-palette"></i></Link></div>
            
            {(state.currentSelection.color !== null) && (state.version === "Pure") &&
                <div className='linkMenu'  id={state.menu === "rims" ? "menuSelected" : ""}><Link  onClick={()=> getMenu("rims")} to= "/Jantes"> Jantes <i class='far fa-futbol'></i></Link></div>
            }
            
            {(state.currentSelection.color === null) && (state.version === "Pure") &&
                <div onClick={() => selectColor()}className='linkMenu-disable'><Link disabled to= "/Jantes"> Jantes <i class='far fa-futbol'></i></Link></div>
            }
            
            <div className='linkMenu' id={state.menu === "sellerie" ? "menuSelected" : ""}><Link onClick={()=> getMenu("sellerie")} to= "/Sellerie"> Sellerie <i className="fas fa-couch"></i></Link></div>
            
            {state.currentSelection.color !== null &&
                <div className='linkMenu'  id={state.menu === "equipments" ? "menuSelected" : ""}><Link onClick={()=> getMenuAndPannel("equipments", "conduite")} to= "/Conduite"> Equipements <i className='fas fa-cogs'></i></Link></div>
            }
            {state.currentSelection.color === null &&
                <div onClick={() => selectColor()} className='linkMenu-disable'><Link disabled to= "/Conduite"> Equipements <i className='fas fa-cogs'></i></Link></div>
            }
            {state.currentSelection.color !== null &&
                <div className='linkMenu' id={state.menu === "accessories" ? "menuSelected" : ""}><Link onClick={()=> getMenuAndPannel("accessories", "exterieur")} to= "/Exterieur"> Accessories <i className='fas fa-box-open'></i></Link></div>
            }
            {state.currentSelection.color === null &&
                <div onClick={() => selectColor()} className='linkMenu-disable'><Link disabled to= "/Exterieur"> Accessories <i className='fas fa-box-open'></i></Link></div>
            }
            <div className='linkMenu' id={state.menu === "summary" ? "menuSelected" : ""}><Link onClick={()=> getMenu("summary")} to= "/Récapitulatif"> Récapitulatif <i className='fas fa-clipboard-list'></i></Link></div>
            {prixTotal  &&
                <div className='linkMenu globalPrice'> Prix globale : {prixTotal} <i className='fas fa-comment-dollar'></i></div>
            }
         </div>
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getMenu: (data)=> dispatch(getMenu(data)),
        getEquipementPannel : (data)=>dispatch(getEquipementPannel(data)),
        getStateFromLocalStorage : (data)=>dispatch(getStateFromLocalStorage(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)