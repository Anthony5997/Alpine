import React from "react";
import { connect } from "react-redux";
 

const Color = ({}) => {

return(
    <div >
    colorrrrrr
    </div>
)}
const mapStateToProps = state =>{
    return{
        color: state.color,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color)