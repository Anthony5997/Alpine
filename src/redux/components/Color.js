import React from "react";
import { connect } from "react-redux";
import { Row, Col, Carousel, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { parseColorSelected } from "../actions";
import Menu from "./Menu";

const Color = ({state, parseColorSelected}) => {

    let mappedColor = state.jsonVersion.characteristic

    const getColor = (currentSelect) => {
console.log(state)
            parseColorSelected(currentSelect)
    }

    const displayColor = () => mappedColor.map((color) => {

        return (
            <div key={color}>
                <div className="container">
                    <Col className="custom-color-select" s={6} m={4} >
                       <div className={state.currentSelection.color ? color.color === state.currentSelection.color ? 'selected' : '' : ""} >
                        <img src={color.rims[0].pictures[0]} onClick={() => (getColor(color))} />
                        <p >{color.name}</p>
                        <p><i class="material-icons">attach_money</i>{color.price}</p>
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
    const mappedPicsJson = () => state.jsonVersion.pictures.map((pictures) => {
        return (
            `${pictures}`
        )
    })

    return(
       <div className='color'>
    <div className='menu'>
        <Menu />
        </div> 
        <h3 className="car-name">{state.currentSelection.name}</h3>
            {state.currentSelection.color === null &&
                <div className="container">
                    <h1 className="select-car-please"> Please, select a car.</h1>
                </div>
            }  
            <Row>
                {displayColor()}
            </Row>
           {state.currentSelection.color !== null && 
                <div className='color-carousel'>
                <Carousel 
                    className="carrousel-select"
                    carouselId="Carousel-32"
                    images={[
                    mappedPics()
                    ]}
                    options={{
                        fullWidth: true,
                        indicators: true,
                    }}
                    /> 
                 </div>
           }   
            {state.currentSelection.color === null && 
                <div className='color-carousel'>
                    <img src={state.jsonVersion.characteristic[0].rims[0].pictures[0]}></img>
                 </div>
           }  
          
                {(state.version === "Pure") && (state.currentSelection.color !== null) &&
                    <Link to="/Jantes" >
                        <div className="next-step">
                        <Button node="button" waves="light" className='blue-grey darken-4' >
                            Etape suivante
                            <Icon right>
                            arrow_forward
                            </Icon>
                        </Button>
                        </div>
                    </Link>
                }
            {(state.version === "Legende") && (state.currentSelection.color !== null) &&
                <Link to="/Sellerie" >
                    <div className="next-step">
                        <Button node="button" waves="light" className='blue-grey darken-4' >
                            Etape précédente
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