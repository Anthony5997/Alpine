import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button, Icon } from 'react-materialize';
import { getAccessories, deleteAccessories } from "../../actions"; 
import Menu from "../Menu";
import Accessories from "./Accessories";
 

const Exterieur = ({state, exteriorAccessories, selectedAccessoriesExterior, getAccessories, deleteAccessories}) => {


   
    const mapExteriorJson = () =>
        exteriorAccessories.map((exteriorAccessories)=>{
        return(
            <Col key ={exteriorAccessories} m={3} s={12} className='itemDriving'>
             <img src={exteriorAccessories.picture}></img>
        
                    <p className='equipmentName truncate'>{exteriorAccessories.name}</p>
                    <p>{exteriorAccessories.price} <i className='fas fa-comment-dollar'></i> 
                    <Button onClick = {()=>getAccessories('exterior',exteriorAccessories)}
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

    
    const mapExteriorSelected = () =>
    selectedAccessoriesExterior.map((exteriorCustomAccessories)=>{
       return(
           <Col key ={exteriorCustomAccessories} m={3} s={12} className='itemDriving'>
               <img  src={exteriorCustomAccessories.picture}></img>
                    <p className='equipmentName truncate'>{exteriorCustomAccessories.name}</p>
                    <p>{exteriorCustomAccessories.price} <i className='fas fa-comment-dollar'></i> 
              <Button onClick = {()=>deleteAccessories('exterior', exteriorCustomAccessories)}
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

   const mappedSelectionPictures = () => selectedAccessoriesExterior.map((exteriorAccessories)=>{
       return (
           `${exteriorAccessories.picture}`
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
            {selectedAccessoriesExterior.length === 0 && 
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
            {selectedAccessoriesExterior.length !== 0 && 
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
            
                {selectedAccessoriesExterior.length !== 0 && 
                    mapExteriorSelected()
                }  {exteriorAccessories.length !== 0 && 
                    mapExteriorJson()
                }
            </Row>
            <Accessories />
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        state : state,
        exteriorAccessories : state.jsonOption.accessories.exterior,
        selectedAccessoriesExterior: state.currentSelection.accessories.exterior
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getAccessories: (component, data) =>  dispatch(getAccessories(component, data)),
        deleteAccessories: (component, data) =>  dispatch(deleteAccessories(component, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exterieur)