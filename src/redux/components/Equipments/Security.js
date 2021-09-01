import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button, Icon } from 'react-materialize'; 
import { getEquipment, deleteEquipment} from "../../actions";
import Menu from "../Menu";
import Equipments from "./Equipments";

const Security = ({state, getEquipment, deleteEquipment}) => {

const onSecurity = (selection, data) => {
  
        if(state.currentSelection.equipment.brake === null){
            getEquipment('brake', data )
        }else if(state.currentSelection.equipment.brake !== null){
            if(state.currentSelection.equipment.brake.name === selection){
                deleteEquipment('brake',data)
            }else{
                getEquipment('brake', data )
            }
        }
    }

  
  
  const mappedPics = () => state.currentSelection.view.map((pictures) => {
            return (
                `${pictures}`
            )
        })
return(
 <div className='itemEquipment'>
     <div className='menu'>
        <Menu />
    </div> 
{(state.currentSelection.equipment.brake === null) && 
    <div className='inncustom-carousel'>
            <Carousel
            images={[
               mappedPics()
            ]}
            options={{
                fullWidth: true,
                indicators: true
            }}
            />
       </div>
    }
   
     {(state.currentSelection.equipment.brake) &&
    <div className='inncustom-carousel'>
        <img src={state.currentSelection.equipment.brake.picture}></img>
       </div>
    }
  

        <Row>
        <Col m={3} s={12} className='itemDriving selected'>
                <img alt="airbags pictures" src={state.jsonOption.equipment.safety.airbag.picture}></img>
                <p className='center'><strong>Option intégrée</strong></p>
                <p className='equipmentName'>{state.jsonOption.equipment.safety.airbag.name}</p>
              
            </Col>
   {
         state.jsonOption.equipment.safety.brake.map((equipment, index) => (
            <Col m={3} s={12} key={equipment} onClick={() => onSecurity(equipment.name, equipment)}  className={equipment.price === 0 ? 'selected itemDriving' :
                state.currentSelection.equipment.brake ? state.jsonOption.equipment.safety.brake[`${index}`].name === state.currentSelection.equipment.brake.name ? 'selected itemDriving' : 'itemDriving' : "itemDriving"}>
                <img alt="equipement picture" src={equipment.picture}></img>

                {equipment.price === 0 &&
                    <>
                    <p className='center'><strong>Option intégrée</strong></p>
                    <p className='equipmentName'>{equipment.name}</p>
                    </>
                }
                {equipment.price !== 0 &&
                    <>
                    <p className='equipmentName'>{equipment.name}</p>
                    <p>{equipment.price} <i class='fas fa-comment-dollar'></i></p>
                    </>
                }
             
                        {state.currentSelection.equipment.brake &&
                        <>
                        {(state.jsonOption.equipment.safety.brake[`${index}`].name === state.currentSelection.equipment.brake.name) && (state.currentSelection.equipment.brake.price !== 0)&&
                            <Button
                            className="red right deleteButton"
                            floating
                            icon={<Icon>delete_forever</Icon>}
                            small                        
                            node="button"
                            waves="light"/>
                        }
                        </>
                    }
            </Col>
         ))}
        </Row>
        <Equipments />
 
   
    
    </div>
)}
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
export default connect(mapStateToProps, mapDispatchToProps)(Security)