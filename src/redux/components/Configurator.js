import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Row, Col, Button, Carousel, Container } from 'react-materialize';
import Menu from "./Menu";
import { getMenu } from "../actions";

const Configurator = ({state, getMenu}) => {
 
return(
    <div>
        <div className='configurator'>
            <h3 className="presentation-version">Edition : {state.version}</h3> 
            {state.version === "Pure" &&
                <Carousel
                    carouselId="Carousel-35"
                    className='carouselHome'
                    images={[
                        "/AlpineCars_app-images/sources-homepage/galerie/A110_PURE_4.jpg",
                        "/AlpineCars_app-images/sources-homepage/galerie/A110_PURE_6.jpg",
                        "/AlpineCars_app-images/sources-homepage/galerie/A110_PURE_8.jpg"
                    ]}
                    options={{
                        fullWidth: true,
                        indicators: true,
                        centerImages: true,
                    }}
                />  
            }
            {state.version === "Legende" &&
                <Carousel
                    carouselId="Carousel-35"
                    className='carouselHome'
                    images={[
                        "/AlpineCars_app-images/sources-homepage/galerie/A110_LEGENDE_1.jpg",
                        "/AlpineCars_app-images/sources-homepage/galerie/A110_LEGENDE_5.jpg",
                        "/AlpineCars_app-images/sources-homepage/galerie/A110_LEGENDE_9.jpg",
                    ]}
                    options={{
                        fullWidth: true,
                        indicators: true,
                        centerImages: true,
                    }}
                />  
            }
            <div className="start-config-button">
                <Link to="/Couleur" onClick={()=>getMenu('color')}>
                    <Button>Commencer la Configuration</Button>
                </Link>
            </div>
        </div>
        <div className="margin-config">
            <Container>
                <Row>
                    <Col m={6}>
                    <img alt="picture in configurator" className="picture-technique-perf" src="/AlpineCars_app-images/sources-homepage/interieur/interieur_desktop.png" />
                    </Col>
                    <Col m={6}>
                    <img className="picture-technique-perf" src="/AlpineCars_app-images/sources-homepage/A110/Presentation_desktop-1.png" />
                    </Col>
                </Row>
            </Container>
        </div>
        <hr className="border-clean"/>
        <Container>
            <h3 className="presentation-info">Perfomances</h3>
            <Row>
                <Col m={6} >
                    <img className="picture-technique-perf" src="/AlpineCars_app-images/sources-homepage/caractВristiques/performance_desktop.png" />
                </Col>
                <Col m={6}>
                <img className="picture-technique-perf" src="/AlpineCars_app-images/sources-homepage/caractВristiques/transmission_desktop.png" />
                </Col>
            </Row>
            <hr/>
        </Container>
       
        <Container>
            <h3 className="presentation-info">Technique</h3>
            <Row >
                <Col m={6}>
                <img className="picture-technique-perf" src="/AlpineCars_app-images/sources-homepage/motorisation/turbo_desktop.png" />
                </Col>

                {state.version === "Pure" &&
                <Col m={6}>
                <img className="picture-technique-perf" src="AlpineCars_app-images/sources-homepage/versions/COMPO-PURE.png" />
                </Col>
                }
                {state.version === "Legende" &&
                <Col m={6}>
                <img className="picture-technique-perf" src="/AlpineCars_app-images/sources-homepage/versions/COMPO-LEGENDE.png" />
                </Col>
                }
            </Row>
            <hr className="border-clean"/>
            <Row>
                <Col m={4} >
                    <img className="picture-technique" src="/AlpineCars_app-images/sources-homepage/caractВristiques/dimensions-tech.png" />
                </Col>
                <Col m={5}>
                    <img className="picture-technique" src="/AlpineCars_app-images/sources-homepage/conception/visuel_legerete_2_desktop.jpg" />
                </Col>
                <Col m={3} >
                    <img className="picture-technique-perf" src="/AlpineCars_app-images/sources-homepage/technologie/Technical-front-wheel-A110_mobile.jpg" />
                    <img className="picture-technique-perf" src="/AlpineCars_app-images/sources-homepage/technologie/Technical-rear-wheel-A110_mobile.jpg" />
                </Col>
            </Row>
            <hr/>
        </Container>

        <Container>
            <h3 className="presentation-info">Modele A110</h3>
            <Row>
                <Col m={7} >
                    <img className="picture-technique-perf" src="/AlpineCars_app-images/sources-homepage/A110/Alpine-A110-1.jpg" alt="modelA110"/>
                </Col>
                <Col m={5}>
                <Carousel
                    carouselId="Carousel-356"
                    className='carouselHome'
                    images={[
                        "/AlpineCars_app-images/configurateur/modele/selection/pure.png",
                        "/AlpineCars_app-images/sources-homepage/conception/alpine-bone.jpg",
                        "/AlpineCars_app-images/sources-homepage/design/Visuel_3_desktop.jpg",
                    ]}
                    options={{
                        fullWidth: true,
                        indicators: false,
                        centerImages: true,
                    }}
                />
                </Col>
            </Row>
            <hr/>
        </Container>

        <div className="menu">
         <Menu />

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
        getMenu: (data)=> dispatch(getMenu(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Configurator)