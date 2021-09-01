import React from "react";
import { connect } from "react-redux";
import { Row, Col, Carousel, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { parseRimsSelected, getMenu } from "../actions";
import Menu from "./Menu";



const Rims = ({state, parseRimsSelected, getMenu}) => {

    let mappedRims = state.rimsJson

    const getRims = (currentSelect) => {
            parseRimsSelected(currentSelect)
    }


    const displayRims = () => mappedRims.map((rims) => {
        return (
            <div key={rims} >
                <div className="container">
                    <Col className="custom-color-select" s={6} m={6} >
                       <div className={state.currentSelection.rims ? rims.model === state.currentSelection.rims.model ? 'selected' : '' : ""} >
                       <img alt="rims pictures" src={rims.pictures[0]} onClick={() => (getRims(rims))}/>
                       {rims.model}
                       <br/>
                       <i class="material-icons">attach_money</i>{rims.price}
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

       <div className='rims'>
            <div className='menu'>
        <Menu />
        </div> 
           <h3 className="car-name">{state.currentSelection.name}</h3>     
                <Row>
                    {displayRims()}
                </Row>
                
            {state.currentSelection.rims !== null && 
                <div className="rims-carousel">
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
            <div className="containerButton">
                    <Link to="/Couleur" onClick={()=>getMenu('color')}>
                       
                        <Button node="button" waves="light" className='blue-grey darken-4'>
                            <Icon left>
                                arrow_back
                            </Icon>
                            Etape précédente
                            
                        </Button>
                        
                    </Link>

                    <Link to="/Sellerie" onClick={()=>getMenu('sellerie')}>
                      
                        <Button node="button" waves="light" className='blue-grey darken-4'>
                            Etape suivante
                            <Icon right>
                             arrow_forward
                            </Icon>
                        </Button>
                        
                    </Link>
            </div>
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
        getMenu: (data)=> dispatch(getMenu(data))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rims)