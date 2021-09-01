import { Tabs, Tab } from 'react-materialize';
import {connect } from 'react-redux'
import EquipementTest from './EquipementTest';

const mapStateToProps = state =>{
    return{
        state : state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
     
    }
}

function EquipementTestListConnect ({state}){
    
  // console.log(state.jsonOption);

    function displayEquipement(key){
        return (
            <Tab active  title={key}
                options={{
                duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }} >
                {Object.keys(state.jsonOption.equipment[key]).map((key2)=>{
                    return ( <EquipementTest element={state.jsonOption.equipment[key][key2]} groupe={key} />)
                })}
            </Tab>
                )
    }
    return (
        <div>
        <Tabs className="tab-demo z-depth-1"
            scope="tabs-22">
                    
            {
                Object.keys(state.jsonOption.equipment).map((key)=>{

                    return displayEquipement(key)
                })
            }
             
        </Tabs> 
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(EquipementTestListConnect)