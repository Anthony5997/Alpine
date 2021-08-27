import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Collection, CollectionItem } from 'react-materialize';
import { getMultimediaSupport , deleteMultimediaSupport } from "../../actions"; 
 

const Multimedia = ({state, multimedia, getMultimediaSupport, deleteMultimediaSupport}) => {

    
    const onMultimedia = (data) => {

        if(state.support.length === 0){
            getMultimediaSupport(data)
        }else{
                for(var i = 0; i < state.support.length; i++){
                      if(state.support[i].name === data.name){
                        deleteMultimediaSupport(data);
                        break;
                    }else if(state.support[i].name !== data.name){
                        getMultimediaSupport(data);
                        break;
                    }
                }
           
        }
    }

    const displayMultimedia = () => multimedia.map((option) => {
        
        return (
            <Col m={3} s={12} >
                <Card className='itemDriving'
                key={option}
                header={<CardTitle image={option.picture}
                onClick={() => onMultimedia(option)}/>}
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
                        multimedia[0].picture,
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
                    displayMultimedia()
                }
            </Row>
        </div>
    )}

const mapStateToProps = state =>{
    return{
        state : state,
        multimedia : state.jsonOption.accessories.multimedia.support,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getMultimediaSupport: (data) =>  dispatch(getMultimediaSupport(data)),
        deleteMultimediaSupport: (data) =>  dispatch(deleteMultimediaSupport(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Multimedia)