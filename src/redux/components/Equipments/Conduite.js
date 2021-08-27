import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Collection, CollectionItem } from 'react-materialize'; 
import { getExhaust, getParkAssist, deleteExhaust, deleteParkAssist} from "../../actions";
import Menu from "../Menu";

const Conduite = ({state, driving, getExhaust, getParkAssist, deleteExhaust, deleteParkAssist}) => {

const onChange = (selection, data) => {

    
    console.log("STATE GET: ", state);


    if(selection === 'Exhaust'){
        if(state.currentSelection.exhaust === null){
            getExhaust(data)
            
        }else{
            deleteExhaust()
        }
    }
    if(selection !== 'Exhaust'){

        if(state.currentSelection.parkassist === null){
                getParkAssist(data)
        }else if(state.parkassist !== null){
            if(state.currentSelection.parkassist.name === selection){
                deleteParkAssist()

            }else{
                getParkAssist(data)
            }
        }
    }
  }

return(
    <div className='driving'>
        <Row>
        <Col m={8} s={12}>
        <Carousel
        carouselId="Carousel-61"
        images={[
            driving.exhaust.picture,
            driving.exhaust.picture
           
        ]}
        options={{
            fullWidth: true,
            indicators: true
        }}
        />
        </Col>
        <Col m={4} s={12}>
        <Row>
            <Col
                m={6}
                s={12}
            >
                <div className="menu">
                    <Menu />
                </div>
            </Col>
            </Row>
        </Col>
        </Row>
        <Row>
        <Col m={3} s={12} onClick={() => onChange("Exhaust", driving.exhaust)}>
                <Card className='itemDriving'
                key={driving.exhaust}
                header={<CardTitle image={driving.exhaust.picture}/>}
                > 
                <p className='equipmentName'>{driving.exhaust.name}</p>
                <p>{driving.exhaust.price}<i class="material-icons">attach_money</i></p>
                </Card> 
            </Col>
   {
         driving.parkAssist.map(equipment => (
            <Col m={3} s={12} onClick={() => onChange(equipment.name, equipment)}>
                <Card className='itemDriving'
                key={equipment}
                header={<CardTitle image={equipment.picture}/>}
                > 
                <p className='equipmentName'>{equipment.name}</p>
                <p>{equipment.price} <i class="material-icons">attach_money</i></p>
                </Card> 
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