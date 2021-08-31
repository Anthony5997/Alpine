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
 

export const getDataJson = (version, option) => {
    return{
       type : 'GET_RES_JSON',
       version: version,
       option : option 
    }
    
}


export const getVersion = (data) => {
    return (dispatch) => {
            dispatch(getDataVersion(data))
        
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

/* EQUIPEMENT */

export const getExhaust = (data) => {
    console.log("exhauts")
    return{
       type : 'GET_EXHAUST',
       data
    }  
}

export const deleteExhaust = (data) => {
    return{
       type : 'DELETE_EXHAUST',
       data
    }   
}

export const getParkAssist = (data) => {
    return{
       type : 'GET_PARKASSIST',
       data
    }    
}

export const deleteParkAssist = (data) => {
    return{
       type : 'DELETE_PARKASSIST',
       data
    }  
}

export const getEquipmentInterieur = (data) => {
    return{
       type : 'GET_EQUIPMENT_INT',
       data
    }  
}

export const deleteEquipmentInterieur  = (data) => {
    return{
       type : 'DELETE_EQUIPMENT_INT',
       data
    } 
}

export const getConfort = (data) => {
    return{
       type : 'GET_CONFORT',
       data
    }  
}

export const deleteConfort  = (data) => {
    return{
       type : 'DELETE_CONFORT',
       data
    }  
}

export const getDesign = (data) => {
    console.log(data)
    return{
       type : 'GET_DESIGN',
       data
    }  
}

export const deleteDesign  = (data) => {
    console.log(data)
    return{
       type : 'DELETE_DESIGN',
       data
    }  
}

export const getStirrups = (data) => {
    return{
       type : 'GET_STIRRUPS',
       data
    }  
}

export const deleteStirrups  = (data) => {
    return{
       type : 'DELETE_STIRRUPS',
       data
    } 
}

export const getLogo = (data) => {
    return{
       type : 'GET_LOGO',
       data
    }  
}

export const deleteLogo  = (data) => {
    return{
       type : 'DELETE_LOGO',
       data
    }  
}

export const getTelemetrics = (data) => {
    return{
       type : 'GET_TELEMETRICS',
       data
    } 
}

export const deleteTelemetrics = (data) => {
    return{
       type : 'DELETE_TELEMETRICS',
       data
    }  
}

export const getAudioSystem = (data) => {
    return{
       type : 'GET_AUDIO',
       data
    }  
}

export const deleteAudioSystem  = (data) => {
    return{
       type : 'DELETE_AUDIO',
       data
    }  
}

export const getBrake = (data) => {
    return{
       type : 'GET_BRAKE',
       data
    }
    
}
export const deleteBrake  = (data) => {
    return{
       type : 'DELETE_BRAKE',
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

/* ACCESSORIES */ 


export const getMultimediaSupport = (data) => {
    return{
        type : 'GET_MULTIMEDIA_SUPPORT',
        data
    }
}

export const deleteMultimediaSupport = (data) => {
    return{
    type : 'DELETE_MULTIMEDIA_SUPPORT',
    data
    }
}

export const getTransport = (data) => {
    return{
        type : 'GET_TRANSPORT',
        data
    }
}

export const deleteTransport = (data) => {
    return{
        type : 'DELETE_TRANSPORT',
        data
    }

}

export const getInnerAccessories = (data) => {
    return{
        type : 'GET_INNER_ACCESSORIES',
        data
    }
}

export const deleteInnerAccessories = (data) => {
    return{
        type : 'DELETE_INNER_ACCESSORIES',
        data
    }

}

export const getExteriorAccessories = (data) => {
    return{
        type : 'GET_EXTERIOR_ACCESSORIES',
        data
    }
}

export const deleteExteriorAccessories = (data) => {
    return{
        type : 'DELETE_EXTERIOR_ACCESSORIES',
        data
    }

}

export const getGarage = (data) => {
    return{
        type : 'GET_GARAGE',
        data
    }
}

export const deleteGarage = (data) => {
    return{
        type : 'DELETE_GARAGE',
        data
    }

}
