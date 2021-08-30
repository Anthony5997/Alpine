export const initialState = {
  version: null,
  photoPure : '/AlpineCars_app-images/sources-homepage/versions/ALPINE-PURE-1.png',
  photoLegende : '/AlpineCars_app-images/sources-homepage/versions/ALPINE-LEGENDE-1.png',
  jsonVersion : {},
  jsonOption : {},
  isFetching : false,
  rimsJson : [],
  sealingJson : [],
  currentSelection : {
    name : null,
    color : null,
    price : null,
    mainPic : null,
    view : [],
    rims : null,
    sealing : null,
    parkassist:null,
    exhaust: null,

    equipment:{
      innCustom : [],
      parkAssist:null,
      exhaust: null, 
    },

  accessories:{
    innerAccessories : [],
    support : [],
    transport : [],
    exteriorAccessories : [],
    garageAccessories : [],
  },

},
  globalPrice : null,
  versionColorPrice : null,
  rimsPrice : 0,
  sealPrice : 0,
  equipementsPrice : null,
  accessoriesPrice : null,

}
   
  export const dataStore = (state = initialState, action) => {
    console.log("action" , action);
      switch (action.type){
       
          case "GET_VERSION":{
              return{
                ...state, 
                version : action.data,


              }
          }
          case "GET_RES_JSON":{
            return{
              ...state,
              jsonVersion : action.version,
              jsonOption : action.option,
              sealingJson : action.version.sealing.characteristic,
              globalPrice : action.version.price,
              isFetching: false,
              
            }
          }
          case "FETCHING_DATA":{
            return{
              ...state,
              isFetching:true,
            }
        }
        case "CHOOSEN_COLOR":{

          return{
            ...state,

            currentSelection : {
              ...state.currentSelection,
              name : action.data.name,
              color : action.data.color,
              price : action.data.price,
              mainPic : action.data.rims[0].pictures[0],
              view : action.data.rims[0].pictures,
            },
            rimsJson : action.data.rims,
            versionColorPrice : state.jsonVersion.price + action.data.price,
            globalPrice : state.jsonVersion.price + state.rimsPrice + state.sealPrice + action.data.price
            
          }
      }
      case "CHOOSEN_RIMS":{
        let newState = {
          ...state,
          currentSelection : {
            ...state.currentSelection,
            rims : action.data,
            view: action.data.pictures
          },
          rimsPrice : action.data.price,
          globalPrice : state.versionColorPrice + state.sealPrice + action.data.price
        }
        return newState
      }
      case "CHOOSEN_SEAL":{
        console.log("SEAL SELECT : " ,action.data.price);
        return{
          ...state,
          currentSelection : {
            ...state.currentSelection,
            sealing : action.data
          },
          sealPrice : action.data.price,
          globalPrice : state.versionColorPrice + state.rimsPrice + action.data.price
        }
    }

    /* EQUIPEMENT */

    case "GET_PARKASSIST":{
      let newState = {
        ...state,
        currentSelection:{
          ...state.currentSelection,
          equipment:{
          ...state.currentSelection.equipment,
          parkAssist: action.data
        }
      }
    }
    return newState
  }
    case "DELETE_PARKASSIST":{
      let newState = {
        ...state,
        currentSelection:{
          ...state.currentSelection,
          equipment:{
          ...state.currentSelection.equipment,
          parkAssist:null
        }
      }
    }
    return newState
  }
    case "GET_EXHAUST":{
      let newState ={
        ...state,
        currentSelection:{
          ...state.currentSelection,
          equipment:{
            ...state.currentSelection.equipment, 
            exhaust: action.data
        }
      }
    }
    return newState
  }
    case "DELETE_EXHAUST":{
      let newState ={
        ...state,
      currentSelection:{
          ...state.currentSelection,
        equipment:{
          ...state.currentSelection.equipment,
          exhaust: null
        }
      }
    }
    return newState
  }

    case "GET_CONFORT":{
      return{
        ...state,
        confort: state.confort.concat(action.data)
      }
    }

    case "DELETE_CONFORT":{
      return{
        ...state,
        confort: state.confort.filter(confort => confort.name !== action.data.name)
      }
    }

    case "GET_DESIGN":{
      return{
        ...state,
        design: state.confort.concat(action.data)
      
      }
    }
    
    case "DELETE_DESIGN":{
      return{
        ...state,
        design: state.confort.filter(confort => confort.name !== action.data.name)
      }
    }

    case "GET_EQUIPMENT_INT":{
      let newState = {
        ...state,
        currentSelection:{
          ...state.currentSelection,
          equipment:{
            ...state.currentSelection.equipment,
            innCustom: state.currentSelection.equipment.innCustom.concat(action.data),
          }
        }, 
        jsonOption:{
          ...state.jsonOption,
          equipment:{
            ...state.jsonOption.equipment,
            innCustom: state.jsonOption.equipment.innCustom.filter(dataInnCustom => dataInnCustom.name !== action.data.name)
          }
        }
      }
      return newState
    }
    
    case "DELETE_EQUIPMENT_EXT":{
      let newState = {
        ...state,
        currentSelection:{
          ...state.currentSelection,
          equipment:{
            ...state.currentSelection.equipment,
            innCustom: state.currentSelection.equipment.innCustom.filter(dataInnCustom => dataInnCustom.name !== action.data.name),
          }
        }, 
        jsonOption:{
          ...state.jsonOption,
          equipment:{
            ...state.jsonOption.equipment,
            innCustom: state.jsonOption.equipment.innCustom.concat(action.data),
          }
        }
      }
      return newState
    }

    /* FIN EQUIPEMENT */

    /* ACCESSORIES */

  case "GET_MULTIMEDIA_SUPPORT":{
    console.log("data d'entré : ",action.data.price);
    let newState = {
      ...state,
      accessoriesPrice : state.accessoriesPrice + action.data.price,
      currentSelection:{
        ...state.currentSelection,
        accessories:{
          ...state.currentSelection.accessories,
          support: state.currentSelection.accessories.support.concat(action.data),
        }
      }, 
      jsonOption:{
        ...state.jsonOption,
        accessories:{
          ...state.jsonOption.accessories,
          multimedia:{
          ...state.jsonOption.accessories.multimedia,
            support: state.jsonOption.accessories.multimedia.support.filter(dataSupport => dataSupport.name !== action.data.name)
          }
        }
      }
    }
      return newState
  }
  case "DELETE_MULTIMEDIA_SUPPORT":{
    let newState = {
      ...state,
      accessoriesPrice : state.accessoriesPrice - action.data.price,
      currentSelection:{
        ...state.currentSelection,
        accessories:{
          ...state.currentSelection.accessories,
          support: state.currentSelection.accessories.support.filter(dataSupport => dataSupport.name !== action.data.name),
        }
      }, 
      jsonOption:{
        ...state.jsonOption,
        accessories:{
          ...state.jsonOption.accessories,
          multimedia:{
            ...state.jsonOption.accessories.multimedia,
            support: state.jsonOption.accessories.multimedia.support.concat(action.data),
          }
        }
      }
    }
    return newState
  }

  case "GET_TRANSPORT":{
    let newState = {
      ...state,
      accessoriesPrice : state.accessoriesPrice + action.data.price,
      currentSelection:{
        ...state.currentSelection,
        accessories:{
          ...state.currentSelection.accessories,
          transport: state.currentSelection.accessories.transport.concat(action.data),
        }
      }, 
      jsonOption:{
        ...state.jsonOption,
        accessories:{
          ...state.jsonOption.accessories,
            transportAndProtection: state.jsonOption.accessories.transportAndProtection.filter(dataTransport => dataTransport.name !== action.data.name) 
        }
      }
    }
    return newState
  }
  
  case "DELETE_TRANSPORT":{
    let newState = {
      ...state,
      accessoriesPrice : state.accessoriesPrice - action.data.price,
      currentSelection:{
        ...state.currentSelection,
        accessories:{
          ...state.currentSelection.accessories,
          transport: state.currentSelection.accessories.transport.filter(dataTransport => dataTransport.name !== action.data.name),
        }
      }, 
      jsonOption:{
        ...state.jsonOption,
        accessories:{
          ...state.jsonOption.accessories,
            transportAndProtection: state.jsonOption.accessories.transportAndProtection.concat(action.data),
        }
      }
    }
    return newState
  }

  case "GET_INNER_ACCESSORIES":{
    let newState = {
      ...state,
      accessoriesPrice : state.accessoriesPrice + action.data.price,
      currentSelection:{
        ...state.currentSelection,
        accessories:{
          ...state.currentSelection.accessories,
          innerAccessories: state.currentSelection.accessories.innerAccessories.concat(action.data),
        }
      }, 
      jsonOption:{
        ...state.jsonOption,
        accessories:{
          ...state.jsonOption.accessories,
          interior: state.jsonOption.accessories.interior.filter(dataInterior => dataInterior.name !== action.data.name)
        }
      }
    }
    return newState
  }
  
  case "DELETE_INNER_ACCESSORIES":{
    let newState = {
      ...state,
      accessoriesPrice : state.accessoriesPrice - action.data.price,
      currentSelection:{
        ...state.currentSelection,
        accessories:{
          ...state.currentSelection.accessories,
          innerAccessories: state.currentSelection.accessories.innerAccessories.filter(dataInterior => dataInterior.name !== action.data.name),
        }
      }, 
      jsonOption:{
        ...state.jsonOption,
        accessories:{
          ...state.jsonOption.accessories,
          interior: state.jsonOption.accessories.interior.concat(action.data),
        }
      }
    }
    return newState
  }

  case "GET_EXTERIOR_ACCESSORIES":{
    let newState = {
      ...state,
      accessoriesPrice : state.accessoriesPrice + action.data.price,
      currentSelection:{
        ...state.currentSelection,
        accessories:{
          ...state.currentSelection.accessories,
          exteriorAccessories: state.currentSelection.accessories.exteriorAccessories.concat(action.data),
        }
      }, 
      jsonOption:{
        ...state.jsonOption,
        accessories:{
          ...state.jsonOption.accessories,
            exterior: state.jsonOption.accessories.exterior.filter(dataExterior => dataExterior.name !== action.data.name) 
        }
      }
    }
    return newState
  }
  
  case "DELETE_EXTERIOR_ACCESSORIES":{
    let newState = {
      ...state,
      accessoriesPrice : state.accessoriesPrice - action.data.price,
      currentSelection:{
        ...state.currentSelection,
        accessories:{
          ...state.currentSelection.accessories,
          exteriorAccessories: state.currentSelection.accessories.exteriorAccessories.filter(dataExterior => dataExterior.name !== action.data.name),
        }
      }, 
      jsonOption:{
        ...state.jsonOption,
        accessories:{
          ...state.jsonOption.accessories,
          exterior: state.jsonOption.accessories.exterior.concat(action.data),
        }
      }
    }
    return newState
  }

  case "GET_GARAGE":{
    let newState = {
      ...state,
      accessoriesPrice : state.accessoriesPrice + action.data.price,
      currentSelection:{
        ...state.currentSelection,
        accessories:{
          ...state.currentSelection.accessories,
          garageAccessories: state.currentSelection.accessories.garageAccessories.concat(action.data),
        }
      }, 
      jsonOption:{
        ...state.jsonOption,
        accessories:{
          ...state.jsonOption.accessories,
            garage: state.jsonOption.accessories.garage.filter(dataGarage => dataGarage.name !== action.data.name) 
        }
      }
    }
    console.log("add in current select / delete in option", newState);
    return newState
  }
  
  case "DELETE_GARAGE":{
    let newState = {
      ...state,
      accessoriesPrice : state.accessoriesPrice - action.data.price,
      currentSelection:{
        ...state.currentSelection,
        accessories:{
          ...state.currentSelection.accessories,
          garageAccessories: state.currentSelection.accessories.garageAccessories.filter(dataGarage => dataGarage.name !== action.data.name),
        }
      }, 
      jsonOption:{
        ...state.jsonOption,
        accessories:{
          ...state.jsonOption.accessories,
          garage: state.jsonOption.accessories.garage.concat(action.data),
        }
      }
    }
    return newState
  }

    /* FIN ACCESSORIES */

  default:
  return state
  }
}
