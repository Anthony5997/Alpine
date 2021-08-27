import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Collection, CollectionItem } from 'react-materialize';
import { getExteriorAccessories , deleteExteriorAccessories } from "../../actions"; 
 

const Exterieur = ({state, exteriorAccessories, getExteriorAccessories, deleteExteriorAccessories}) => {


    console.log("State : ", state);
    console.log("State : ", state);
    
    const onExteriorAccessories = (data) => {

        if(state.exteriorAccessories.length === 0){
            getExteriorAccessories(data)
        }else{
                for(var i = 0; i < state.exteriorAccessories.length; i++){
                      if(state.exteriorAccessories[i].name === data.name){
                        deleteExteriorAccessories(data);
                        break;
                    }else if(state.exteriorAccessories[i].name !== data.name){
                        getExteriorAccessories(data);
                        break;
                    }
                }
           
        }
}

    
    const displayExteriorAccessories = () => exteriorAccessories.map((option) => {
        
        return (
            <Col m={3} s={12} >
                <Card className='itemDriving'
                key={option}
                header={<CardTitle image={option.picture}
                onClick={() => onExteriorAccessories(option)}/>}
                > 
                    <p className='equipementName'>{option.name}</p>
                    <p>{option.price} <i class="material-icons">attach_money</i></p>
                </Card> 
            </Col>
        )
        })
    
    return(
        <div className='driving'>
            <Row>
                <Col m={8} s={12}>
                    <Carousel
                    carouselId="Carousel-61"
                    images={[
                        exteriorAccessories[0].picture,
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
                            <Collection>
                            <CollectionItem href="#">
                                Alvin
                            </CollectionItem>
                            <CollectionItem
                                active
                                href="#"
                            >
                                Alvin
                            </CollectionItem>
                            <CollectionItem href="#">
                                Alvin
                            </CollectionItem>
                            <CollectionItem href="#">
                                Alvin
                            </CollectionItem>
                            </Collection>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col m={3} s={12} >
                </Col>
                {
                    displayExteriorAccessories()
                }
            </Row>
        </div>
    )}

const mapStateToProps = state =>{
    return{
        state : state,
        exteriorAccessories : state.jsonOption.accessories.exterior,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getExteriorAccessories: (data) =>  dispatch(getExteriorAccessories(data)),
        deleteExteriorAccessories: (data) =>  dispatch(deleteExteriorAccessories(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exterieur)