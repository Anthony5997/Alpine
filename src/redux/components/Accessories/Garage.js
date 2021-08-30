import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button, Icon } from 'react-materialize';
import { getGarage , deleteGarage } from "../../actions";
import Menu from "../Menu"; 
 

const Garage = ({state, garage, selectedAccessoriesGarage, getGarage, deleteGarage}) => {

    
    const mapGarageJson = () =>
        garage.map((garageAccessories)=>{
            return(
                <Col key ={garageAccessories} m={3} s={12} className='itemDriving'>
                <img src={garageAccessories.picture}></img>
                    {
                    garageAccessories.price === 0 &&
                        <>
                            <p className='center'><strong>Option intégrée</strong></p>
                            <p className='equipmentName truncate'>{garageAccessories.name}</p>
                        </>
                    }
                    {
                    garageAccessories.price !== 0 &&
                        <>
                        <p className='equipmentName truncate'>{garageAccessories.name}</p>
                        <p>{garageAccessories.price} <i className='fas fa-comment-dollar'></i> <Button onClick = {()=>getGarage(garageAccessories)}
                            className='right'
                            floating
                            icon={<Icon>add</Icon>}
                            small
                            node="button"
                            waves="light"
                        /></p>
                        </>
                    }
                </Col>
            )
        })

    const mapGarageSelected = () =>
    selectedAccessoriesGarage.map((garageCustomAccessories)=>{
    return(
        <Col key ={garageCustomAccessories} m={3} s={12} className='itemDriving'>
            <img  src={garageCustomAccessories.picture}></img>
            <Button onClick = {()=>deleteGarage(garageCustomAccessories)}
                className="red right deleteInncustom"
                floating
                icon={<Icon>delete_forever</Icon>}
                small                        
                node="button"
                waves="light"
                />
        </Col>
    )
    })

    const mappedSelectionPictures = () => selectedAccessoriesGarage.map((garageAccessories)=>{
        return (
            `${garageAccessories.picture}`
        )
    })

    const mappedPics = () => state.currentSelection.view.map((pictures) => {
        return (
            `${pictures}`
        ) 
    })
    return (
        <div className='itemEquipment'>
            <div className='menu'>
                <Menu />
            </div> 
            {selectedAccessoriesGarage.length === 0 && 
            <div className='inncustom-carousel'>
                <Carousel
                    images={[
                        mappedPics()
                    ]}
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                />
            </div>
            }
            {selectedAccessoriesGarage.length !== 0 && 
                <div className='inncustom-carousel'>
                    <Carousel
                        images={[
                            mappedSelectionPictures()
                        ]}
                        options={{
                            fullWidth: true,
                            indicators: true
                        }}
                    />
                </div>
            }
            <Row className='optSelected'>
            
                {selectedAccessoriesGarage.length !== 0 && 
                <>
                    <h3>Options choisis</h3>
                    {mapGarageSelected()}
                </>
                }
            </Row>
            <Row>
                {garage.length !== 0 && 
                    mapGarageJson()
                }
            </Row>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        state : state,
        garage : state.jsonOption.accessories.garage,
        selectedAccessoriesGarage: state.currentSelection.accessories.garageAccessories

    }
}
const mapDispatchToProps = dispatch => {
    return{
        getGarage: (data) =>  dispatch(getGarage(data)),
        deleteGarage: (data) =>  dispatch(deleteGarage(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Garage)