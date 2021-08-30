import React from "react";
import { connect } from "react-redux";
import { deleteDesign, getDesign} from "../../actions";
import { Carousel, Row, Col, Icon, Button } from 'react-materialize'; 
import Menu from "../Menu";


const Design = ({state, getDesign, deleteDesign}) => { 
    const mapDesignJson = () =>
    state.jsonOption.equipment.design.map((design)=>{
        
        return(
            <Col key ={design} m={6} s={12} className='itemDriving'>
             <img src={design.picture}></img>
                <p className='equipmentName truncate'>{design.name}</p>
                <p>{design.price} <i class='fas fa-comment-dollar'></i> 
                    <Button onClick = {()=>getDesign(design)}
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
  

const mapConfortSelected = () =>
     state.currentSelection.equipment.design.map((design)=>{
        return(
            <Col key ={design} m={6} s={12} className='itemDriving selected'>
                <img  src={design.picture}></img>
                <p className='equipmentName truncate'>{design.name}</p>
                <p>{design.price} <i class='fas fa-comment-dollar'></i> </p>
               <Button onClick = {()=>deleteDesign(design)}
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
   
      
    
    const mappedDesignPictures = () => state.currentSelection.equipment.design.map((design)=>{
        return (
            `${design.picture}`
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
            {state.currentSelection.equipment.design.length === 0 && 
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
              {state.currentSelection.equipment.design.length !== 0 && 
            <div className='inncustom-carousel'>
                    <Carousel
                    images={[
                        mappedDesignPictures()
                    ]}
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                    />
               </div>
            }
            <Row>
                {state.currentSelection.equipment.design &&
                mapConfortSelected()
                }

                {state.jsonOption.equipment.design &&
                mapDesignJson()}
            </Row>
         
        
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        state : state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getDesign : (data) => dispatch(getDesign(data)),
        deleteDesign : (data) => dispatch(deleteDesign(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Design)