import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button } from 'react-materialize';  
import { getMenu, getEquipementPannel } from "../actions";
import { Link } from 'react-router-dom';

const Summary = ({state, getMenu}) => {

    let prixTotal = state.accessoriesPrice + state.globalPrice + state.equipementsPrice;


    const getMenuAndPannel = (menu, pannel) => {

        getMenu(menu);
        getEquipementPannel(pannel);
    }
    const mapDesign = () =>
    state.currentSelection.equipment.design.map((design)=>{
       return(
        <Row className='descriptifItem'>
            <Col s={4} className='imgCategories'>
            <img src={design.picture} ></img>
            </Col>
            <Col s={5} className='left-align'>
                {design.name}
            </Col>
            <Col s={3} className='right-align'>
                {design.price} <i class='fas fa-comment-dollar'></i>
            </Col>
        </Row>
           
       )
    })

    const mapInnCustom = () =>
    state.currentSelection.equipment.innCustom.map((innCustom)=>{
       return(
        <Row className='descriptifItem'>
            <Col s={4} className='imgCategories'>
            <img src={innCustom.picture} ></img>
            </Col>
            <Col s={5} className='left-align'>
                {innCustom.name}
            </Col>
            <Col s={3} className='right-align'>
                {innCustom.price} <i class='fas fa-comment-dollar'></i>
            </Col>
        </Row>
       )
    })
    const mapAccessoriesItem = (key) =>
    state.currentSelection.accessories[key].map((accessories)=>{
       return(
        <Row className='descriptifItem'>
            <Col s={4} className='imgCategories'>
            <img src={accessories.picture} ></img>
            </Col>
            <Col s={5} className='left-align'>
                {accessories.name}
            </Col>
            <Col s={3} className='right-align'>
                {accessories.price} <i class='fas fa-comment-dollar'></i>
            </Col>
        </Row>
       )
    })
  
    const mapAccessories = (key) => {
    let categorie = ''
        switch (key) {
            case "interior":
                categorie = 'Interieur'
                break;
            case "multimedia":
                categorie = 'Multimedia'
                break;
            case "transportAndProtection":
                categorie = 'Transport'
                break;
            case "exterior":
                categorie = 'Exterieur'
                break;
            case "garage":
                categorie = 'Garage'
                break;
                        
            default:
                break;
        }
        return ( 
            <div className='container'>
            <p className='categorie'>{categorie}</p>

            {state.currentSelection.accessories[key].length !== 0 &&
                mapAccessoriesItem(key)
            }
                    <Link to={"/" + categorie} onClick={()=>getMenuAndPannel("accessories", key)}>
                            {state.currentSelection.accessories[key].length !== 0 ? "CHANGER" : "CHOISIR" }
                    </Link>
        </div>
        
    )}
  

return(

    <div >
    <Row>
        <Col  m={7} s={12}>
            {state.currentSelection.color &&
         <Row>
             <Col s={12} className='viewModal'>
                <img src={state.currentSelection.view[0]}></img>
             </Col>
             <Col s={12} className='viewModal'>
             <img src={state.currentSelection.view[1]}></img>
             </Col>
             <Col s={12} className='viewModal'>
             <img src={state.currentSelection.view[2]}></img>
             </Col>
         </Row>
            }
        </Col>
        <Col  m={5} s={12}>
            <div className='prixSummary'>
                <p> Prix du modèle configuré </p>
                <p>{prixTotal}<i class='fas fa-comment-dollar'></i></p>   
            </div>
            <div className='resetSummary'>
                <a href='/#versions'>
                <Button className='light-blue darken-4 white-text'
                    node="a"
                    waves="light">
                    Recommencer
                </Button>
                </a>
                <p>Votre Configuration</p>
            </div>

            <p className='categorie'>Version</p>
            <div className='descriptifSummary'>
                <div>
                    {state.version}
                </div>
                <div>
                    {state.jsonVersion.price} <i class='fas fa-comment-dollar'></i>
                </div>
            </div>
            <Link to="/" onClick={()=>getMenu(null)}>
                     CHANGER 
            </Link>

            <p className='categorie'>Couleur</p>
                {state.currentSelection.color !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.view[0]} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.color}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.jsonVersion.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
                    <Link to="/Couleur" onClick={()=>getMenu('color')}>
                    {state.currentSelection.color ? "CHANGER" : "CHOISIR" }
                    </Link>

            <p className='categorie'>Jantes</p>
            {state.currentSelection.rims !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.rims.pictures[4]} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.rims.model}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.currentSelection.rims.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
                    <Link to="/Jantes" onClick={()=>getMenu('rims')}>
                            {state.currentSelection.rims ? "CHANGER" : "CHOISIR" }
                    </Link>


            <p className='categorie'>Sellerie</p>
            {state.currentSelection.sealing !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.sealing.picture} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.sealing.name}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.currentSelection.sealing.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
                    <Link to="/Sellerie" onClick={()=>getMenu('sealing')}>
                            {state.currentSelection.sealing ? "CHANGER" : "CHOISIR" }
                    </Link>
            
           
        </Col>
    </Row> 
    <p className='categorie center-align'>Équipements</p>
        <div className='container'>
            <p className='categorie'>Multimedia</p>
            {state.currentSelection.equipment.audioSystem !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.equipment.audioSystem.picture} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.equipment.audioSystem.name}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.currentSelection.equipment.audioSystem.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
                    <Link to="/Media" onClick={()=>getMenuAndPannel("equipments", "media")}>
                            {state.currentSelection.equipment.audioSystem ? "CHANGER" : "CHOISIR" }
                    </Link>
        </div>
        <div className='container'>
            <p className='categorie'>Télémétrics</p>
            {state.currentSelection.equipment.telemetrics !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.equipment.telemetrics.picture} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.equipment.telemetrics.name}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.currentSelection.equipment.telemetrics.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
                    <Link to="/Media" onClick={()=>getMenuAndPannel("equipments", "media")}>
                            {state.currentSelection.equipment.telemetrics ? "CHANGER" : "CHOISIR" }
                    </Link>
        </div>
        <div className='container'>
            <p className='categorie'>Confort</p>
            {state.currentSelection.equipment.confort !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.equipment.confort.picture} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.equipment.confort.name}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.currentSelection.equipment.confort.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
                    <Link to="/Confort" onClick={()=>getMenuAndPannel("equipments", "confort")}>
                            {state.currentSelection.equipment.confort ? "CHANGER" : "CHOISIR" }
                    </Link>
        </div>
        <div className='container'>
            <p className='categorie'>Design</p>
            {state.currentSelection.equipment.design.length !== 0 &&

                   mapDesign()
                    
                }
                    <Link to="/Design" onClick={()=>getMenuAndPannel("equipments", "design")}>
                            {state.currentSelection.equipment.design.length !== 0 ? "CHANGER" : "CHOISIR" }
                    </Link>
        </div>
        <div className='container'>
            <p className='categorie'>Intérieur</p>
            {state.currentSelection.equipment.innCustom.length !== 0 &&

                   mapInnCustom()
                    
                }
                    <Link to="/EquipmentInterieur" onClick={()=>getMenuAndPannel("equipments", "equipementInterieur")}>
                            {state.currentSelection.equipment.innCustom.length !== 0 ? "CHANGER" : "CHOISIR" }
                    </Link>
        </div>
        
        <div className='container'>
            <p className='categorie'>Conduite</p>
            {state.currentSelection.equipment.parkAssist !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.equipment.parkAssist.picture} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.equipment.parkAssist.name}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.currentSelection.equipment.parkAssist.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
            {state.currentSelection.equipment.exhaust !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.equipment.exhaust.picture} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.equipment.exhaust.name}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.currentSelection.equipment.exhaust.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
                {(state.currentSelection.equipment.exhaust) || (state.currentSelection.equipment.parkAssist) &&
                    <Link to="/Conduite" onClick={()=>getMenuAndPannel("equipments", "conduite")}>
                           CHANGER
                    </Link>
                    }
                {(state.currentSelection.equipment.exhaust === null ) && (state.currentSelection.equipment.parkAssist === null) &&
                    <Link to="/Conduite" onClick={()=>getMenuAndPannel("equipments", "conduite")}>
                           CHOISIR
                    </Link>
                    }    
        </div>

        <div className='container'>
            <p className='categorie'>Exterieur</p>
            {state.currentSelection.equipment.logo !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.equipment.logo.picture} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.equipment.logo.name}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.currentSelection.equipment.logo.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
            {state.currentSelection.equipment.stirrups !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.equipment.stirrups.picture} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.equipment.stirrups.name}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.currentSelection.equipment.stirrups.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
                {(state.currentSelection.equipment.stirrups) || (state.currentSelection.equipment.logo) &&
                    <Link to="/EquipmentExterieur" onClick={()=>getMenuAndPannel("equipments", "equipementExterieur")}>
                           CHANGER
                    </Link>
                    }
                {(state.currentSelection.equipment.stirrups === null ) && (state.currentSelection.equipment.logo === null) &&
                    <Link to="/EquipmentExterieur" onClick={()=>getMenuAndPannel("equipments", "equipementExterieur")}>
                           CHOISIR
                    </Link>
                    }    
        </div>
        <div className='container'>
            <p className='categorie'>Securite</p>
            {state.currentSelection.equipment.brake !== null &&
                <>
                    <Row className='descriptifItem'>
                        <Col s={4} className='imgCategories'>
                        <img src={state.currentSelection.equipment.brake.picture} ></img>
                        </Col>
                        <Col s={5} className='left-align'>
                            {state.currentSelection.equipment.brake.name}
                        </Col>
                        <Col s={3} className='right-align'>
                            {state.currentSelection.equipment.brake.price} <i class='fas fa-comment-dollar'></i>
                        </Col>
                    </Row>
                    
                    </>
                }
                    <Link to="/Security" onClick={()=>getMenuAndPannel("equipments", "security")}>
                            {state.currentSelection.equipment.brake ? "CHANGER" : "CHOISIR" }
                    </Link>
        </div>

        <p className='categorie center-align'>Accessoires</p>
        {
         Object.keys(state.currentSelection.accessories).map((key)=>{

            return  mapAccessories(key)
        })
       }

        


      
    </div>
)}
const mapStateToProps = state =>{
    return{
        state: state
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getMenu: (data)=> dispatch(getMenu(data)),
        getEquipementPannel : (data)=>dispatch(getEquipementPannel(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Summary)