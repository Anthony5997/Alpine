import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button, Icon } from 'react-materialize';
import { getExteriorAccessories , deleteExteriorAccessories } from "../../actions"; 
import Menu from "../Menu";
 

const Exterieur = ({state, exteriorAccessories, selectedAccessoriesExterior, getExteriorAccessories, deleteExteriorAccessories}) => {


   
    const mapExteriorJson = () =>
        exteriorAccessories.map((exteriorAccessories)=>{
        return(
            <Col key ={exteriorAccessories} m={3} s={12} className='itemDriving'>
             <img src={exteriorAccessories.picture}></img>
                {
                exteriorAccessories.price === 0 &&
                    <>
                        <p className='center'><strong>Option intégrée</strong></p>
                        <p className='equipmentName truncate'>{exteriorAccessories.name}</p>
                    </>
                }
                {
                exteriorAccessories.price !== 0 &&
                    <>
                    <p className='equipmentName truncate'>{exteriorAccessories.name}</p>
                    <p>{exteriorAccessories.price} <i className='fas fa-comment-dollar'></i> <Button onClick = {()=>getExteriorAccessories(exteriorAccessories)}
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

    
    const mapExteriorSelected = () =>
    selectedAccessoriesExterior.map((exteriorCustomAccessories)=>{
       return(
           <Col key ={exteriorCustomAccessories} m={3} s={12} className='itemDriving'>
               <img  src={exteriorCustomAccessories.picture}></img>
              <Button onClick = {()=>deleteExteriorAccessories(exteriorCustomAccessories)}
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
            <Row className='optSelected'>
            
                {selectedAccessoriesExterior.length !== 0 && 
                <>
                    <h3>Options choisis</h3>
                    {mapExteriorSelected()}
                </>
                }
            </Row>
            <Row>
                {exteriorAccessories.length !== 0 && 
                    mapExteriorJson()
                }
            </Row>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        state : state,
        exteriorAccessories : state.jsonOption.accessories.exterior,
        selectedAccessoriesExterior: state.currentSelection.accessories.exteriorAccessories
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getExteriorAccessories: (data) =>  dispatch(getExteriorAccessories(data)),
        deleteExteriorAccessories: (data) =>  dispatch(deleteExteriorAccessories(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exterieur)