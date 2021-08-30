import React from "react";
import { connect } from "react-redux";
import { Row, Col, Carousel, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { parseSealSelected } from "../actions";
import Menu from "./Menu";



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
                        <img src={seal.picture} onClick={() => (getSeal(seal))} alt="car seal"/>
                       {seal.name}  <i className="material-icons">attach_money</i>
                        {seal.price}
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

       <div className='sealing'>
            <div className='menu'>
        <Menu />
        </div> 
           <h3 className="car-name">{state.currentSelection.name}</h3>
           <Row>
                {displaySeal()}
            </Row>
            {state.currentSelection.sealing === null && 
                <div className='sealing-carousel'>
                    <img src={mappedSeal[0].picture} alt="car seal"></img>
                 </div>
           }  
            {state.currentSelection.sealing !== null && 
                <div className="sealing-carousel">
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
                 <div className="containerButton">
                    <Link to="/Jantes">
                       
                        <Button node="button" waves="light" className='blue-grey darken-4'>
                            <Icon left>
                                arrow_back
                            </Icon>
                            Etape précédente
                            
                        </Button>
                        
                    </Link>

                    <Link to="/Equipements">
                      
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

        parseSealSelected: (data)=> dispatch(parseSealSelected(data)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sealing)