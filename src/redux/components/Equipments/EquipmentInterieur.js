import React from "react";
import { connect } from "react-redux";
import { getEquipmentInterieur, deleteEquipmentInterieur} from "../../actions";
import { Carousel, Row, Col, Card, CardTitle, Icon, Button } from 'react-materialize'; 
import Menu from "../Menu";


const EquipmentInterieur = ({state, equipmentInterieur, getEquipmentInterieur, deleteEquipmentInterieur, selectedEquipmentInterieur}) => { 
    console.log(state)
 
    const mapInterieurJson = () =>
        equipmentInterieur.map((innCustom)=>{
            
            return(
                <Col key ={innCustom} m={3} s={12} className='itemDriving'>
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
                    <p>{innCustom.price} <i class='fas fa-comment-dollar'></i> <Button onClick = {()=>getEquipmentInterieur(innCustom)}
                        className='right'
                        floating
                        icon={<Icon>add</Icon>}
                        small
                        node="button"
                        waves="light"
                    /></p>
                    </>
                 }
                </Col>
            )
        })
      
    
    const mapInterieurSelected = () =>
         selectedEquipmentInterieur.map((innCustom)=>{
            return(
                <Col key ={innCustom} m={3} s={12} className='itemDriving'>
                    <img  src={innCustom.picture}></img>
                   <Button onClick = {()=>deleteEquipmentInterieur(innCustom)}
                        className="red right deleteInncustom"
                        floating
                        icon={<Icon>delete_forever</Icon>}
                        small                        
                        node="button"
                        waves="light"
                        />
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
            <Row className='optSelected'>
            
                {selectedEquipmentInterieur.length !== 0 && 
                < >
                <h3>Options choisis</h3>
                    {mapInterieurSelected()}
                    </>
                }
            </Row>
            <Row>
                {   equipmentInterieur.length !== 0 && 
                    mapInterieurJson()
                }
            </Row>
    
    
        
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
        getEquipmentInterieur : (data) => dispatch(getEquipmentInterieur(data)),
        deleteEquipmentInterieur : (data) => dispatch(deleteEquipmentInterieur(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EquipmentInterieur)