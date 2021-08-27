import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Collection, CollectionItem } from 'react-materialize';
import { getInnerAccessories , deleteInnerAccessories } from "../../actions"; 
 

const Interieur = ({state, innerAccessories, getInnerAccessories, deleteInnerAccessories}) => {


    const onInnerAccessories = (data) => {

        if(state.innerAccessories.length === 0){
            getInnerAccessories(data)
        }else{
                for(var i = 0; i < state.innerAccessories.length; i++){
                      if(state.innerAccessories[i].name === data.name){
                        deleteInnerAccessories(data);
                        break;
                    }else if(state.innerAccessories[i].name !== data.name){
                        getInnerAccessories(data);
                        break;
                    }
                }
           
        }
}

    
    const displayInnerAccessories = () => innerAccessories.map((option) => {
        
        return (
            <Col m={3} s={12} >
                <Card className='itemDriving'
                key={option}
                header={<CardTitle image={option.picture}
                onClick={() => onInnerAccessories(option)}/>}
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
                        innerAccessories[0].picture,
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
                    displayInnerAccessories()
                }
            </Row>
        </div>
    )}

const mapStateToProps = state =>{
    return{
        state : state,
        innerAccessories : state.jsonOption.accessories.interior,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getInnerAccessories: (data) =>  dispatch(getInnerAccessories(data)),
        deleteInnerAccessories: (data) =>  dispatch(deleteInnerAccessories(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Interieur)