import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button, Icon } from 'react-materialize';
import { getAccessories, deleteAccessories } from "../../actions";
import Menu from "../Menu";
import Accessories from "./Accessories";
 

const Transport = ({state, transport, selectedAccessoriesTransport, getAccessories, deleteAccessories}) => {


    
    const mapTransportJson = () =>
    transport.map((transportAccessories)=>{
        
        return(
            <Col key ={transportAccessories} m={3} s={12} className='itemDriving'>
             <img src={transportAccessories.picture}></img>
            
                <p className='equipmentName truncate'>{transportAccessories.name}</p>
                <p>{transportAccessories.price} <i className='fas fa-comment-dollar'></i> 
                <Button onClick = {()=>getAccessories('transportAndProtection', transportAccessories)}
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

    
    const mapTransportSelected = () =>
    selectedAccessoriesTransport.map((transportCustomAccessories)=>{
       return(
           <Col key ={transportCustomAccessories} m={3} s={12} className='itemDriving'>
               <img  src={transportCustomAccessories.picture}></img>
               <p className='equipmentName truncate'>{transportCustomAccessories.name}</p>
               <p>{transportCustomAccessories.price} <i className='fas fa-comment-dollar'></i> 
              <Button onClick = {()=>deleteAccessories('transportAndProtection', transportCustomAccessories)}
                   className="red right deleteInncustom"
                   floating
                   icon={<Icon>delete_forever</Icon>}
                   small                        
                   node="button"
                   waves="light"
                   /></p>
           </Col>
       )
    })

   const mappedSelectionPictures = () => selectedAccessoriesTransport.map((transportAccessories)=>{
       return (
           `${transportAccessories.picture}`
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
            {selectedAccessoriesTransport.length === 0 && 
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
            {selectedAccessoriesTransport.length !== 0 && 
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
            
                {selectedAccessoriesTransport.length !== 0 && 
                    mapTransportSelected()
                }
                {transport.length !== 0 && 
                    mapTransportJson()
                }
            </Row>
            
            <Accessories />
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        state : state,
        transport : state.jsonOption.accessories.transportAndProtection,
        selectedAccessoriesTransport: state.currentSelection.accessories.transportAndProtection

    }
}
const mapDispatchToProps = dispatch => {
    return{
        getAccessories: (component, data) =>  dispatch(getAccessories(component, data)),
        deleteAccessories: (component, data) =>  dispatch(deleteAccessories(component, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Transport)