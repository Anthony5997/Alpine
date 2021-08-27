import React from "react";
import { connect } from "react-redux";
import { Row, Col, Carousel, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { parseSealSelected } from "../actions";



const Sealing = ({state, parseSealSelected}) => {

    console.log("state sealing : ", state);
    let mappedSeal = state.sealingJson

    const getSeal = (currentSelect) => {
            parseSealSelected(currentSelect)
    }

    const displaySeal = () => mappedSeal.map((seal) => {
        return (
            <div key={seal}>
                <div className="container">
                    <Col className="" s={6} m={6} >
                       <div className="custom-color-select">
                        <img src={seal.picture} onClick={() => (getSeal(seal))}/>
                        {seal.name}
                       </div>
                    </Col>
                </div>
            </div>
        )
    })

    const mappedSealPics = () => state.currentSelection.sealing.views.map((key) => {
        return (
            `${key}`
        )
    })

    return(

       <div>
           <h3 className="car-name">{state.currentSelection.name}</h3>
            {state.currentSelection.sealing !== null && 
                <div className="container">
                    <Carousel 
                        className="carrousel-select"
                        carouselId="Carousel-3"
                        images={[
                    
                        mappedSealPics()
                        ]}
                        options={{
                            dist: 0,
                            duration: 200,
                            fullWidth: true,
                            indicators: true,
                            noWrap: false,
                            numVisible: 5,
                            onCycleTo: null,
                            padding: 0,
                            shift: 0
                        }}
                    />
                </div>
            }
         
            <Row>
                {displaySeal()}
            </Row>
            <Row>
                <Col m={2}>
                    <Link to="/Jantes">
                        <div className="next-step">
                            <Button node="button" waves="light">
                                Previous step
                                <Icon right>
                                arrow_back
                                </Icon>
                            </Button>
                        </div>
                    </Link>
                </Col>
                <Col m={8}>
                </Col>
                <Col m={2}>
                    <Link to="/Equipements">
                        <div className="next-step">
                            <Button node="button" waves="light">
                                Next step
                                <Icon right>
                                arrow_forward
                                </Icon>
                            </Button>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    )}

const mapStateToProps = state =>{
    return{
        state: state,
    }
}
const mapDispatchToProps = dispatch => {
    return{

        parseSealSelected: (data)=> dispatch(parseSealSelected(data)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sealing)