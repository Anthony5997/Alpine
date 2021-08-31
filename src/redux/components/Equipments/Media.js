import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Button, Icon } from 'react-materialize'; 
import { getTelemetrics, deleteTelemetrics, getAudioSystem, deleteAudioSystem} from "../../actions";
import Equipments from "./Equipments";
import Menu from "../Menu";

const Media = ({state, getTelemetrics, deleteTelemetrics, getAudioSystem, deleteAudioSystem}) => {

const onMedia = (selection, data) => {
    if(selection === 'Telemetrics'){
        if(state.currentSelection.equipment.telemetrics === null){
            getTelemetrics(data)
            
        }else{
            deleteTelemetrics(data)
        }
    }
    if(selection !== 'Telemetrics'){

        if(state.currentSelection.equipment.audioSystem === null){
            getAudioSystem(data)
        }else if(state.currentSelection.equipment.audioSystem !== null){
            if(state.currentSelection.equipment.audioSystem.name === selection){
            deleteAudioSystem(data)
            }else{
                getAudioSystem(data)
            }
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
{(state.currentSelection.equipment.telemetrics === null) && (state.currentSelection.equipment.audioSystem === null) &&
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
    {(state.currentSelection.equipment.telemetrics === null) && (state.currentSelection.equipment.audioSystem) &&
        <div className='inncustom-carousel'>
            <img src={state.currentSelection.equipment.audioSystem.picture}></img>
       </div>
    }
     {(state.currentSelection.equipment.telemetrics) && (state.currentSelection.equipment.audioSystem === null) &&
        <div className='inncustom-carousel'>
            <img src={state.currentSelection.equipment.telemetrics.picture}></img>
       </div>
    }
    {(state.currentSelection.equipment.telemetrics) && (state.currentSelection.equipment.audioSystem) &&
      <div className='inncustom-carousel'>
        <Carousel
        images={[
            state.currentSelection.equipment.telemetrics.picture,
            state.currentSelection.equipment.audioSystem.picture
        ]}
        options={{
            fullWidth: true,
            indicators: true
        }}
        />
     </div>
    }

        <Row>
        <Col m={3} s={12} key={state.jsonOption.equipment.mediaAndNavigation.telemetrics} onClick={() => onMedia("Telemetrics", state.jsonOption.equipment.mediaAndNavigation.telemetrics)} className={state.currentSelection.equipment.telemetrics ? 'selected itemDriving' : 'itemDriving'}>
                <img src={state.jsonOption.equipment.mediaAndNavigation.telemetrics.picture}></img>
                <p className='equipmentName'>{state.jsonOption.equipment.mediaAndNavigation.telemetrics.name}</p>
                <p>{state.jsonOption.equipment.mediaAndNavigation.telemetrics.price} <i class='fas fa-comment-dollar'></i></p>
                {state.currentSelection.equipment.telemetrics &&
                        <>
                        {state.jsonOption.equipment.mediaAndNavigation.telemetrics.name === state.currentSelection.equipment.telemetrics.name &&
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
                    {state.currentSelection.equipment.telemetrics === null &&
                            <Button 
                            className="right deleteButton"
                            floating
                            icon={<Icon>add</Icon>}
                            small                        
                            node="button"
                            waves="light"/>
                        }

            </Col>
   {
         state.jsonOption.equipment.mediaAndNavigation.audioSystem.map((equipment, index) => (
            <Col m={3} s={12} key={equipment} onClick={() => onMedia(equipment.name, equipment)}  className={equipment.price === 0 ? 'selected itemDriving' : state.currentSelection.equipment.audioSystem ? state.jsonOption.equipment.mediaAndNavigation.audioSystem[`${index}`].name === state.currentSelection.equipment.audioSystem.name ? 'selected itemDriving' : 'itemDriving' : "itemDriving"}>
                <img src={equipment.picture}></img>

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
             
                        {state.currentSelection.equipment.audioSystem &&
                        <>
                        {(state.jsonOption.equipment.mediaAndNavigation.audioSystem[`${index}`].name === state.currentSelection.equipment.audioSystem.name) && (state.currentSelection.equipment.audioSystem.price !== 0)&&
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
                     {(state.currentSelection.equipment.audioSystem === null) || (state.jsonOption.equipment.mediaAndNavigation.audioSystem[`${index}`].name !== state.currentSelection.equipment.audioSystem.name) &&
                            <>
                            { equipment.price !== 0 &&
                            <Button
                            className="right deleteButton"
                            floating
                            icon={<Icon>add</Icon>}
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
        getTelemetrics: (data) => dispatch(getTelemetrics(data)),
        getAudioSystem: (data) => dispatch(getAudioSystem(data)),
        deleteTelemetrics: (data) => dispatch(deleteTelemetrics(data)),
        deleteAudioSystem: (data) => dispatch(deleteAudioSystem(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Media)