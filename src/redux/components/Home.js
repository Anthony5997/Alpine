import React from "react";
import { connect } from "react-redux";
import Versions from "./Versions";
 

const Home = ({}) => {

return(
    <Versions/>
)}
const mapStateToProps = state =>{
    return{
        
    }
}
const mapDispatchToProps = dispatch => {
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)