import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Collection, CollectionItem } from 'react-materialize';
import { getGarage , deleteGarage } from "../../actions"; 
 

const Garage = ({state, garage, getGarage, deleteGarage}) => {

    
    const onGarage = (data) => {

        if(state.garage.length === 0){
            getGarage(data)
        }else{
                for(var i = 0; i < state.garage.length; i++){
                      if(state.garage[i].name === data.name){
                        deleteGarage(data);
                        break;
                    }else if(state.garage[i].name !== data.name){
                        getGarage(data);
                        break;
                    }
                }
           
        }
    }

    const displayGarage = () => garage.map((option) => {
        
        return (
            <Col m={3} s={12} >
                <Card className='itemDriving'
                key={option}
                header={<CardTitle image={option.picture}
                onClick={() => onGarage(option)}/>}
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
                        garage[0].picture,
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
                    displayGarage()
                }
            </Row>
        </div>
    )}

const mapStateToProps = state =>{
    return{
        state : state,
        garage : state.jsonOption.accessories.garage,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getGarage: (data) =>  dispatch(getGarage(data)),
        deleteGarage: (data) =>  dispatch(deleteGarage(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Garage)