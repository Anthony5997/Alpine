import React from "react";
import { connect } from "react-redux";
import { Row, Col, Carousel, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { parseRimsSelected } from "../actions";



const Rims = ({state, parseRimsSelected}) => {


    let mappedRims = state.rimsJson

    const getRims = (currentSelect) => {
            parseRimsSelected(currentSelect)
    }


    const displayRims = () => mappedRims.map((rims) => {
        return (
            <div key={rims}>
                <div className="container">
                    <Col className="" s={6} m={6} >
                       <div className="custom-color-select">
                       <img src={rims.pictures[0]} onClick={() => (getRims(rims))}/>
                       {rims.model}
                       <br/>
                       {" Prix : " +rims.price}
                       </div>
                    </Col>
                </div>
            </div>
        )
    })

    const mappedPics = () => state.currentSelection.view.map((key) => {
        return (
            `${key}`
        )
    })

    return(

       <div>
           <h3 className="car-name">{state.currentSelection.name}</h3>
            <div className="container">
            <Carousel 
                    className="carrousel-select"
                    carouselId="Carousel-2"
                    images={[
                    mappedPics()
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
            {state.currentSelection.color === null &&
                <div className="container">
                    <h1 className="select-car-please"> Please, select a car.</h1>
                </div>
            }
            <Row>
            {displayRims()}

            </Row>
            <Row>
                <Col m={2}>
                    <Link to="/Couleur">
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
                    <Link to="/Sellerie">
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

        parseRimsSelected: (data)=> dispatch(parseRimsSelected(data)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rims)