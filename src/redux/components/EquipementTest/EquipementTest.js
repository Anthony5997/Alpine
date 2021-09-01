import { Tabs, Tab, Col, Button, Icon } from 'react-materialize';
import {connect } from 'react-redux'


const mapStateToProps = (state, ownProps) =>{
    return{
        state : state,
        props: ownProps
    }
}
const mapDispatchToProps = dispatch => {
    return{
     
    }
}

function EquipementTest ({state, props}){
   // console.log(props);


    function handleClick(element){
       // console.log('cliqué cliqué', element);
    }

    function displayCard(){

        if (props.element.length >1) {
            return props.element.map(element => {
                return (
                    <Col s={2} className='itemDriving'>
                    <img src={element.picture}></img>
                    <p className='equipmentName truncate'>{element.name}</p>
                    <p>{element.price} <i class='fas fa-comment-dollar'></i> 
                        <Button onClick = {()=>handleClick(element)}
                        className='right'
                        floating
                        icon={<Icon>add</Icon>}
                        small
                        node="button"
                        waves="light"
                    /></p>
                 
                </Col>    
                )
            });
        }else{

            return (
                <Col s={2} className='itemDriving'>
                    <img src={props.element.picture}></img>
                    <p className='equipmentName truncate'>{props.element.name}</p>
                    <p>{props.element.price} <i class='fas fa-comment-dollar'></i> 
                        <Button onClick = {()=>handleClick(props.element)}
                        className='right'
                        floating
                        icon={<Icon>add</Icon>}
                        small
                        node="button"
                        waves="light"
                    /></p>
                 
                </Col>
            )
        }

    }
    return (
        <div>
            {displayCard()}
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(EquipementTest)