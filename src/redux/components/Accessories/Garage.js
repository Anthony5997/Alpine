import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button, Icon } from 'react-materialize';
import { getAccessories, deleteAccessories } from "../../actions";
import Menu from "../Menu"; 
import Accessories from "./Accessories";
 

const Garage = ({state, garage, selectedAccessoriesGarage, getAccessories, deleteAccessories}) => {

    
    const mapGarageJson = () =>
        garage.map((garageAccessories)=>{
            return(
                <Col key ={garageAccessories} m={3} s={12} className='itemDriving'>
                <img src={garageAccessories.picture}></img>
                        <p className='equipmentName truncate'>{garageAccessories.name}</p>
                        <p>{garageAccessories.price} <i className='fas fa-comment-dollar'></i> 
                        <Button onClick = {()=>getAccessories('garage',garageAccessories)}
                            className='right'
                            floating
                            icon={<Icon>add</Icon>}
                            small
                            node="button"
                            waves="light"
                        /></p>
                    
                </Col>
            )
        })

    const mapGarageSelected = () =>
    selectedAccessoriesGarage.map((garageCustomAccessories)=>{
    return(
        <Col key ={garageCustomAccessories} m={3} s={12} className='itemDriving'>
            <img  src={garageCustomAccessories.picture}></img>
                <p className='equipmentName truncate'>{garageCustomAccessories.name}</p>
                <p>{garageCustomAccessories.price} <i className='fas fa-comment-dollar'></i> 
            <Button onClick = {()=>deleteAccessories('garage',garageCustomAccessories)}
                className="red right"
                floating
                icon={<Icon>delete_forever</Icon>}
                small                        
                node="button"
                waves="light"
                /></p>
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
            <Row>
            
                {selectedAccessoriesGarage.length !== 0 && 
                    mapGarageSelected()
                }
                {garage.length !== 0 && 
                    mapGarageJson()
                }
            </Row>
           
            <Accessories />
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        state : state,
        garage : state.jsonOption.accessories.garage,
        selectedAccessoriesGarage: state.currentSelection.accessories.garage

    }
}
const mapDispatchToProps = dispatch => {
    return{
        getAccessories: (component, data) =>  dispatch(getAccessories(component, data)),
        deleteAccessories: (component, data) =>  dispatch(deleteAccessories(component, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Garage)