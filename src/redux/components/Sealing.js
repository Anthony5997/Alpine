import React from "react";
import { connect } from "react-redux";
import { Row, Col, Carousel, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { parseSealSelected, getMenu, getEquipementPannel } from "../actions";
import Menu from "./Menu";



const Sealing = ({state, parseSealSelected, getMenu, getEquipementPannel}) => {

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
                        <img alt="seal pictures" src={seal.picture} onClick={() => (getSeal(seal))}/>
                       {seal.name}  <i class="material-icons">attach_money</i>
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

    const getMenuAndPannel = () => {

        getMenu('equipments');
        getEquipementPannel();
    }

    return(

       <div className='sealing'>
            <div className='menu'>
        <Menu />
        </div> 
           <h3 className="car-name">{state.currentSelection.name}</h3>
           <Row>
                {displaySeal()}
            </Row>
         
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
            {state.currentSelection.color === null &&
                <div className="container">
                    <h1 className="select-car-please"> Please, select a car.</h1>
                </div>
            }
                 <div className="containerButton">
                    <Link to="/Jantes" onClick={()=>getMenu('rims')}>
                       
                        <Button node="button" waves="light" className='blue-grey darken-4'>
                            <Icon left>
                                arrow_back
                            </Icon>
                            Etape précédente
                            
                        </Button>
                        
                    </Link>

                    <Link to="/Conduite" onClick={()=>getMenuAndPannel()}>
                      
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
        getMenu: (data)=> dispatch(getMenu(data)),
        getEquipementPannel : ()=>dispatch(getEquipementPannel('conduite'))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sealing)