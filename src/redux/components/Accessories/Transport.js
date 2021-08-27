import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Collection, CollectionItem } from 'react-materialize';
import { getTransport , deleteTransport } from "../../actions";
import Menu from "../Menu";
 

const Transport = ({state, transport, getTransport, deleteTransport}) => {


    
    const onTransport = (data) => {

        if(state.transport.length === 0){
            getTransport(data)
        }else{
                for(var i = 0; i < state.transport.length; i++){
                      if(state.transport[i].name === data.name){
                        deleteTransport(data);
                        break;
                    }else if(state.transport[i].name !== data.name){
                        getTransport(data);
                        break;
                    }
                }
           
        }
}

    
    const displayTransport = () => transport.map((option) => {
        
        return (
            <Col m={3} s={12} >
                <Card className='itemDriving'
                key={option}
                header={<CardTitle image={option.picture}
                onClick={() => onTransport(option)}/>}
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
                        transport[0].picture,
                    ]}
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                    />
                </Col>
                <Col m={4} s={12}>
                    <Row>
                        <Col m={6} s={12}>
                           TEST
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col m={3} s={12} >
                </Col>
                {
                    displayTransport()
                }
            </Row>
            <div className="menu">
                <Menu />
            </div>
        </div>
    )}

const mapStateToProps = state =>{
    return{
        state : state,
        transport : state.jsonOption.accessories.transportAndProtection,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getTransport: (data) =>  dispatch(getTransport(data)),
        deleteTransport: (data) =>  dispatch(deleteTransport(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Transport)