import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button, Icon } from 'react-materialize';
import { getTransport , deleteTransport } from "../../actions";
import Menu from "../Menu";
 

const Transport = ({state, transport, selectedAccessoriesTransport, getTransport, deleteTransport}) => {


    
    const mapTransportJson = () =>
    transport.map((transportAccessories)=>{
        
        return(
            <Col key ={transportAccessories} m={3} s={12} className='itemDriving'>
             <img src={transportAccessories.picture}></img>
             {
              transportAccessories.price === 0 &&
                 <>
                <p className='center'><strong>Option intégrée</strong></p>
                <p className='equipmentName truncate'>{transportAccessories.name}</p>
                </>
             }
              {
              transportAccessories.price !== 0 &&
                <>
                <p className='equipmentName truncate'>{transportAccessories.name}</p>
                <p>{transportAccessories.price} <i className='fas fa-comment-dollar'></i> <Button onClick = {()=>getTransport(transportAccessories)}
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

    
    const mapTransportSelected = () =>
    selectedAccessoriesTransport.map((transportCustomAccessories)=>{
       return(
           <Col key ={transportCustomAccessories} m={3} s={12} className='itemDriving'>
               <img  src={transportCustomAccessories.picture}></img>
              <Button onClick = {()=>deleteTransport(transportCustomAccessories)}
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
            <Row className='optSelected'>
            
                {selectedAccessoriesTransport.length !== 0 && 
                <>
                    <h3>Options choisis</h3>
                    {mapTransportSelected()}
                </>
                }
            </Row>
            <Row>
                {transport.length !== 0 && 
                    mapTransportJson()
                }
            </Row>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        state : state,
        transport : state.jsonOption.accessories.transportAndProtection,
        selectedAccessoriesTransport: state.currentSelection.accessories.transport

    }
}
const mapDispatchToProps = dispatch => {
    return{
        getTransport: (data) =>  dispatch(getTransport(data)),
        deleteTransport: (data) =>  dispatch(deleteTransport(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Transport)