import React from "react";
import { connect } from "react-redux";
import { getEquipment, deleteEquipment} from "../../actions";
import { Carousel, Row, Col, Icon, Button } from 'react-materialize'; 
import Menu from "../Menu";
import Equipments from "./Equipments";


const Confort = ({state, getEquipment, deleteEquipment}) => { 
 
    const mapConfortJson = () =>
        state.jsonOption.equipment.confort.map((confort, index)=>{
            
            return(
                <Col key ={confort} m={3} s={12} className={confort.price === 0 ? 'selected itemDriving' : state.currentSelection.equipment.confort ? state.jsonOption.equipment.confort[`${index}`].name === state.currentSelection.equipment.confort.name ? 'selected itemDriving' : 'itemDriving' : "itemDriving"} >
                 <img src={confort.picture}></img>
                 {
                  confort.price === 0 &&
                     <>
                    <p className='center'><strong>Option intégrée</strong></p>
                    <p className='equipmentName truncate'>{confort.name}</p>
                    </>
                 }
                  {
                  confort.price !== 0 &&
                    <>
                    <p className='equipmentName truncate'>{confort.name}</p>
                    <p>{confort.price} <i class='fas fa-comment-dollar'></i> 
                        {state.currentSelection.equipment.confort && 
                        <Button onClick = {()=>deleteEquipment('confort',confort)}
                            className='right red'
                            floating
                            icon={<Icon>delete_forever</Icon>}
                            small
                            node="button"
                            waves="light"
                        />}
                        {state.currentSelection.equipment.confort === null && 
                        <Button onClick = {()=>getEquipment('confort',confort)}
                            className='right'
                            floating
                            icon={<Icon>add</Icon>}
                            small
                            node="button"
                            waves="light"
                        />}
                    
                    </p>
                    </>
                 }
                </Col>
            )
        })
      
    
    const mappedSelectionPictures = () => state.jsonOption.equipment.confort.map((confort)=>{
        return (
            `${confort.picture}`
        )
       })

    
    return (
        <div className='itemEquipment'>
            <div className='menu'>
             <Menu />
            </div> 
            {state.currentSelection.equipment.confort === null && 
            <div className='inncustom-carousel'>
                    <Carousel
                    images={[
                        state.jsonOption.equipment.confort[0].picture,
                        state.jsonOption.equipment.confort[2].picture,
                    ]}
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                    />
               </div>
            }
              {state.currentSelection.equipment.confort && 
            <div className='inncustom-carousel'>
                    <Carousel
                    images={[
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
                {mapConfortJson()}
            </Row>
            <Equipments />
         
    
    
        
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
        getEquipment : (component, data) =>dispatch(getEquipment(component, data)),
        deleteEquipment : (component, data) =>dispatch(deleteEquipment(component, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Confort)