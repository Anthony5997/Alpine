import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Button, Icon } from 'react-materialize'; 
import { getExhaust, getParkAssist, deleteExhaust, deleteParkAssist} from "../../actions";
import Menu from "../Menu";

const Conduite = ({state, driving, getExhaust, getParkAssist, deleteExhaust, deleteParkAssist}) => {

const onConduite = (selection, data) => {
    if(selection === 'Exhaust'){
        if(state.currentSelection.equipment.exhaust === null){
            getExhaust(data)
            
        }else{
            deleteExhaust()
        }
    }
    if(selection !== 'Exhaust'){

        if(state.currentSelection.equipment.parkAssist === null){
            getParkAssist(data)
        }else if(state.currentSelection.equipment.parkAssist !== null){
            if(state.currentSelection.equipment.parkAssist.name === selection){
            deleteParkAssist()
            }else{
                getParkAssist(data)
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
{(state.currentSelection.equipment.exhaust === null) && (state.currentSelection.equipment.parkAssist === null) &&
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
    {(state.currentSelection.equipment.exhaust === null) && (state.currentSelection.equipment.parkAssist) &&
    <div className='inncustom-carousel'>
        <img src={state.currentSelection.equipment.parkAssist.picture}></img>
       </div>
    }
     {(state.currentSelection.equipment.exhaust) && (state.currentSelection.equipment.parkAssist === null) &&
    <div className='inncustom-carousel'>
        <img src={state.currentSelection.equipment.exhaust.picture}></img>
       </div>
    }
    {(state.currentSelection.equipment.exhaust) && (state.currentSelection.equipment.parkAssist) &&
      <div className='inncustom-carousel'>
      <Carousel
      images={[
        state.currentSelection.equipment.exhaust.picture,
        state.currentSelection.equipment.parkAssist.picture
      ]}
      options={{
          fullWidth: true,
          indicators: true
      }}
      />
     </div>
    }

        <Row>
        <Col m={3} s={12} key={driving.exhaust} onClick={() => onConduite("Exhaust", driving.exhaust)} className={state.currentSelection.equipment.exhaust ? 'selected itemDriving' : 'itemDriving'}>
                <img src={driving.exhaust.picture}></img>
                <p className='equipmentName'>{driving.exhaust.name}</p>
                <p>{driving.exhaust.price} <i class='fas fa-comment-dollar'></i></p>
                {state.currentSelection.equipment.exhaust &&
                        <>
                        {driving.exhaust.name === state.currentSelection.equipment.exhaust.name &&
                            <Button onClick = {()=>deleteExhaust()}
                            className="red right deleteInncustom"
                            floating
                            icon={<Icon>delete_forever</Icon>}
                            small                        
                            node="button"
                            waves="light"/>
                        }
                        </>
                    }
            </Col>
   {
         driving.parkAssist.map((equipment, index) => (
            <Col m={3} s={12} key={equipment} onClick={() => onConduite(equipment.name, equipment)}  className={state.currentSelection.equipment.parkAssist ? driving.parkAssist[`${index}`].name === state.currentSelection.equipment.parkAssist.name ? 'selected itemDriving' : 'itemDriving' : "itemDriving"}>
                <img src={equipment.picture}></img>
                <p className='equipmentName'>{equipment.name}</p>
                <p>{equipment.price} <i class='fas fa-comment-dollar'></i></p>
                        {state.currentSelection.equipment.parkAssist &&
                        <>
                        {driving.parkAssist[`${index}`].name === state.currentSelection.equipment.parkAssist.name &&
                            <Button onClick = {()=>deleteParkAssist()}
                            className="red right deleteInncustom"
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
 
   
    
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state,
        driving: state.jsonOption.equipment.driving
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getExhaust: (data) => dispatch(getExhaust(data)),
        getParkAssist: (data) => dispatch(getParkAssist(data)),
        deleteExhaust: () => dispatch(deleteExhaust()),
        deleteParkAssist: () => dispatch(deleteParkAssist()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Conduite)