import React from "react";
import { connect } from "react-redux";
import { getEquipmentArray, deleteEquipmentArray} from "../../actions";
import { Carousel, Row, Col, Icon, Button } from 'react-materialize'; 
import Menu from "../Menu";
import Equipments from "./Equipments";


const EquipmentInterieur = ({state, equipmentInterieur, getEquipmentArray, deleteEquipmentArray, selectedEquipmentInterieur}) => { 

 
    const mapInterieurJson = () =>
        equipmentInterieur.map((innCustom)=>{
            
            return(
                <Col key ={innCustom} m={3} s={12} className={innCustom.price === 0 ? 'itemDriving selected' : 'itemDriving'}>
                 <img src={innCustom.picture}></img>
                 {
                  innCustom.price === 0 &&
                     <>
                    <p className='center'><strong>Option intégrée</strong></p>
                    <p className='equipmentName truncate'>{innCustom.name}</p>
                    </>
                 }
                  {
                  innCustom.price !== 0 &&
                    <>
                    <p className='equipmentName truncate'>{innCustom.name}</p>
                    <p>{innCustom.price} <i class='fas fa-comment-dollar'></i>
                    <Button onClick = {()=>getEquipmentArray('innCustom',innCustom)}
                        className="right"
                        floating
                        icon={<Icon>add</Icon>}
                        small                        
                        node="button"
                        waves="light"
                        />
                    </p>


                    </>
                 }
                </Col>
            )
        })
      
    
    const mapInterieurSelected = () =>
         selectedEquipmentInterieur.map((innCustom)=>{
            return(
                <Col key ={innCustom} m={3} s={12} className='itemDriving selected'>
                    <img  src={innCustom.picture}></img>
                    <p className='equipmentName truncate'>{innCustom.name}</p>
                    <p>{innCustom.price} <i class='fas fa-comment-dollar'></i> 
                   <Button onClick = {()=>deleteEquipmentArray('innCustom',innCustom)}
                        className="red right"
                        floating
                        icon={<Icon>delete_forever</Icon>}
                        small                        
                        node="button"
                        waves="light"
                        />
                        </p>
                </Col>
            )
         })
    
    const mappedSelectionPictures = () => selectedEquipmentInterieur.map((innCustom)=>{
        return (
            `${innCustom.picture}`
        )
       })
    return (
        <div className='itemEquipment'>
            <div className='menu'>
             <Menu />
            </div> 
            {selectedEquipmentInterieur.length === 0 && 
            <div className='inncustom-carousel'>
                    <Carousel
                    images={[
                        equipmentInterieur[0].picture
                    ]}
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                    />
               </div>
            }
            {selectedEquipmentInterieur.length !== 0 && 
              <div className='inncustom-carousel'>
              <Carousel
              images={[
                equipmentInterieur[0].picture,
                mappedSelectionPictures()
              ]}
              options={{
                  fullWidth: true,
                  indicators: true
              }}
              />
             </div>
    
            }
        
    <Row>
                {equipmentInterieur.length !== 0 && 

                    mapInterieurJson()
                }
                {selectedEquipmentInterieur.length !== 0 && 
                
                    mapInterieurSelected()
                
                }
    </Row>
    <Equipments />
        
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        state : state,
        equipmentInterieur : state.jsonOption.equipment.innCustom,
        selectedEquipmentInterieur: state.currentSelection.equipment.innCustom
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getEquipmentArray : (component, data) =>dispatch(getEquipmentArray(component, data)),
        deleteEquipmentArray : (component, data) =>dispatch(deleteEquipmentArray(component, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EquipmentInterieur)