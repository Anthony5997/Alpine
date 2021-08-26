import React from "react";
import { connect } from "react-redux";
import { Row, Col, Carousel, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { parseColorSelected } from "../actions";

const Color = ({state, parseColorSelected}) => {

    let mappedColor = state.jsonVersion.characteristic
   
    const getColor = (currentSelect) => {

            parseColorSelected(currentSelect)
    }

    const displayColor = () => mappedColor.map((color) => {

        return (
            <div key={color}>
                <div className="container">
                    <Col className="" s={6} m={4} >
                       <div className="custom-color-select">
                        <img src={color.rims[0].pictures[0]} onClick={() => (getColor(color))}/>
                        {color.name}
                       </div>   
                    </Col>
                </div>
            </div>
        )
    })

    const mappedPics = () => state.currentSelection.view.map((pictures) => {
        return (
            `${pictures}`
        )
    })

    return(
       <div>
           <h3 className="car-name">{state.currentSelection.name}</h3>
           {state.currentSelection.color !== null &&
            <div className="container">
                <Carousel 
                    className="carrousel-select"
                    carouselId="Carousel-1"
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
           }
            {state.currentSelection.color === null &&
                <div className="container">
                    <h1 className="select-car-please"> Please, select a car.</h1>
                </div>
            }

            <Row>
                {displayColor()}
            </Row>
                {(state.version === "Pure") && (state.currentSelection.color !== null) &&
                    <Link to="/Jantes">
                        <div className="next-step">
                        <Button node="button" waves="light">
                            Next step
                            <Icon right>
                            arrow_forward
                            </Icon>
                        </Button>
                        </div>
                    </Link>
                }
            {(state.version === "Legende") && (state.currentSelection.color !== null) &&
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
            }
        </div>
    )}

const mapStateToProps = state =>{
    return{
        state: state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
      
        parseColorSelected: (data)=> dispatch(parseColorSelected(data)),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color)