import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button, Icon } from 'react-materialize'; 
import { getLogo, getStirrups, deleteLogo, deleteStirrups} from "../../actions";
import Menu from "../Menu";

const EquipmentExterieur = ({state, getLogo, getStirrups, deleteLogo, deleteStirrups}) => {
console.log(state)
const onExtCustom = (data, selection) => {
    if(selection === 'logo'){
        if(state.currentSelection.equipment.logo === null){
            getLogo(data)
            
        }else{
            deleteLogo()
        }
    }
    if(selection !== 'logo'){

        if(state.currentSelection.equipment.stirrups === null){
            getStirrups(data)
        }else if(state.currentSelection.equipment.stirrups !== null){
            if(state.currentSelection.equipment.stirrups.name === data.name){
            deleteStirrups()
            }else{
                getStirrups(data)
            }
        }
    }

  }
  
  const mappedPics = () => state.currentSelection.view.map((pictures) => {
            return (
                `${pictures}`
            )
        })


return(
 <div className='itemEquipment'>
     <div className='menu'>
        <Menu />
    </div> 
{(state.currentSelection.equipment.logo === null) && (state.currentSelection.equipment.stirrups === null) &&
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
    {(state.currentSelection.equipment.logo === null) && (state.currentSelection.equipment.stirrups) &&
        <div className='inncustom-carousel'>
            <img src={state.currentSelection.equipment.stirrups.picture}></img>
       </div>
    }
     {(state.currentSelection.equipment.logo) && (state.currentSelection.equipment.stirrups === null) &&
        <div className='inncustom-carousel'>
            <img src={state.currentSelection.equipment.logo.picture}></img>
       </div>
    }
    {(state.currentSelection.equipment.logo) && (state.currentSelection.equipment.stirrups) &&
      <div className='inncustom-carousel'>
      <Carousel
      images={[
        state.currentSelection.equipment.logo.picture,
        state.currentSelection.equipment.stirrups.picture
      ]}
      options={{
          fullWidth: true,
          indicators: true
      }}
      />
     </div>
    }

        <Row>
        <Col m={4} s={12} key={state.jsonOption.equipment.extCustom.logo} onClick={() => onExtCustom(state.jsonOption.equipment.extCustom.logo, "logo")} className={state.currentSelection.equipment.logo ? 'selected itemDriving' : 'itemDriving'}>
                <img src={state.jsonOption.equipment.extCustom.logo.picture}></img>
                <p className='equipmentName'>{state.jsonOption.equipment.extCustom.logo.name}</p>
                <p>{state.jsonOption.equipment.extCustom.logo.price} <i class='fas fa-comment-dollar'></i></p>
                {state.currentSelection.equipment.logo &&
                        <>
                        {state.jsonOption.equipment.extCustom.logo.name === state.currentSelection.equipment.logo.name &&
                            <Button onClick = {()=>deleteLogo()}
                            className="red right deleteInncustom"
                            floating
                            icon={<Icon>delete_forever</Icon>}
                            small                        
                            node="button"
                            waves="light"/>
                        }
                        </>
                    }
            </Col>
   {
         state.jsonOption.equipment.extCustom.stirrups.map((equipment, index) => (
            <Col m={4} s={12} key={equipment} onClick={() => onExtCustom(equipment, equipment.name)}  className={state.currentSelection.equipment.stirrups ? state.jsonOption.equipment.extCustom.stirrups[`${index}`].name === state.currentSelection.equipment.stirrups.name ? 'selected itemDriving' : 'itemDriving' : "itemDriving"}>
                <img src={equipment.picture}></img>
                {equipment.price === 0 &&
                    <>
                    <p className='center'><strong>Option intégrée</strong></p>
                    <p className='equipmentName'>{equipment.name}</p>
                    </>
                }
                {equipment.price !== 0 &&
                    <>
                    <p className='equipmentName'>{equipment.name}</p>
                    <p>{equipment.price} <i class='fas fa-comment-dollar'></i></p>
                    </>
                }
                
                
                        {state.currentSelection.equipment.stirrups &&
                        <>
                        {(state.jsonOption.equipment.extCustom.stirrups[`${index}`].name === state.currentSelection.equipment.stirrups.name) && (state.currentSelection.equipment.stirrups.price !== 0)&&
                            <Button onClick = {()=>deleteStirrups()}
                            className="red right deleteInncustom"
                            floating
                            icon={<Icon>delete_forever</Icon>}
                            small                        
                            node="button"
                            waves="light"/>
                        }
                        </>
                    }
            </Col>
         ))}
        </Row>
 
   
    
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state,
        driving: state.jsonOption.equipment.driving
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getLogo: (data) => dispatch(getLogo(data)),
        getStirrups: (data) => dispatch(getStirrups(data)),
        deleteLogo: () => dispatch(deleteLogo()),
        deleteStirrups: () => dispatch(deleteStirrups()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EquipmentExterieur)