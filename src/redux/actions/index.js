export const getDataVersion = (data) => {

    return{
       type : 'GET_VERSION',
        data 
    }
    
}

export const getData = () => {
    return {
        type : 'FETCHING_DATA'
    }
}

export const getStateFromLocalStorage = (data) => {

    return {
        type : 'GET_STATE_FROM_STORAGE',
        data
    }

}


export const getDataJson = (version, option) => {
return{
   type : 'GET_RES_JSON',
   version: version,
   option : option 
}

}

export const getEquipment = (component, data) =>{
return{
    type : 'GET_EQUIPMENT',
    component : component,
    data: data
}
}
export const deleteEquipment = (component, data) =>{
return{
    type : 'DELETE_EQUIPMENT',
    component : component,
    data:data 
}
}
export const getEquipmentArray = (component, data) =>{
return{
    type : 'GET_EQUIPMENT_ARRAY',
    component : component,
    data: data
}
}
export const deleteEquipmentArray = (component, data) =>{
return{
    type : 'DELETE_EQUIPMENT_ARRAY',
    component : component,
    data:data 
}
}
export const getAccessories = (component, data) =>{
return{
    type : 'GET_ACCESSORIES',
    component : component,
    data: data
}
}
export const deleteAccessories = (component, data) =>{
return{
    type : 'DELETE_ACCESSORIES',
    component : component,
    data:data 
}
}

export const getVersion = (data) => {
return (dispatch) => {
        dispatch(getDataVersion(data))
    
}
}

export const parseColorSelected = (data) => {

return {
    type : "CHOOSEN_COLOR",
    data
}
}

export const parseRimsSelected = (data) => {

return {
    type : "CHOOSEN_RIMS",
    data
}
}

export const parseSealSelected = (data) => {

return {
    type : "CHOOSEN_SEAL",
    data
}
}


export const getMenu = (data) => {
return{
   type : 'GET_MENU',
   data
}

}
export const getEquipementPannel = (data) => {
return{
   type : 'GET_EQUIPEMENT_PANNEL',
   data
}

}

export const getResJson = (version) => {

return (dispatch) => {
    dispatch(getData())
fetch('../../alpine.json')
.then((res) => {
    return res.json()})
.then(data => { 
    if (version === 'Pure'){
        dispatch(getDataJson(data.version.pure, data.version.option))
    }else if(version === 'Legende'){
       dispatch(getDataJson(data.version.legende, data.version.option))
    }
})
.catch(error => console.log(error))
}

}