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
    rims : {},
    sealing : null,
    parkassist:null,
    exhaust: null,
  },
  support : [],
  transport : [],
  innerAccessories : [],
  exteriorAccessories : [],
  garage : [],
  };
   
  export const dataStore = (state = initialState, action) => {
    console.log("action" , action);
      switch (action.type){
       
          case "GET_VERSION":{
              return{
                ...state, 
                version : action.data

              }
          }
          case "GET_RES_JSON":{
            return{
              ...state,
              jsonVersion : action.version,
              jsonOption : action.option,
              sealingJson : action.version.sealing.characteristic,
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
            rimsJson : action.data.rims
          }
      }
      case "CHOOSEN_RIMS":{
        let newState = {
          ...state,
          currentSelection : {
            ...state.currentSelection,
            rims : action.data,
            view: action.data.pictures
          }
        }
        console.log(newState);
        return newState
      }
      case "CHOOSEN_SEAL":{
        return{
          ...state,
          currentSelection : {
            ...state.currentSelection,
            sealing : action.data
          }
        }
    }
    case "GET_PARKASSIST":{
      return{
        ...state,
        currentSelection : {
        ...state.currentSelection,
        parkassist: action.data
       
      }
    }
  }
    case "DELETE_PARKASSIST":{
      return{
        ...state,
        currentSelection : {
          ...state.currentSelection,
          parkassist: null
       
      }
      }
    }
    case "GET_EXHAUST":{
      return{
        ...state,
        currentSelection : {
          ...state.currentSelection,
          exhaust: action.data,
      }
        
       
      }
    }
    case "DELETE_EXHAUST":{
      return{
        ...state,
        currentSelection : {
          ...state.currentSelection,
          exhaust: null,
      }
      }
  }
  case "GET_MULTIMEDIA_SUPPORT":{
    return{
      ...state,
      support: state.support.concat(action.data)
  
    }
}
  case "DELETE_MULTIMEDIA_SUPPORT":{
    return{
      ...state,
      support: state.support.filter(support => support.name != action.data.name)
    }
  }

  case "GET_TRANSPORT":{
    return{
      ...state,
      transport: state.transport.concat(action.data)
    }
  }
  
  case "DELETE_TRANSPORT":{
    return{
      ...state,
      transport: state.transport.filter(transportItem => transportItem.name != action.data.name)
    }
  }

  case "GET_INNER_ACCESSORIES":{
    return{
      ...state,
      innerAccessories: state.innerAccessories.concat(action.data)
    }
  }
  
  case "DELETE_INNER_ACCESSORIES":{
    return{
      ...state,
      innerAccessories: state.innerAccessories.filter(innerAccessoriesItem => innerAccessoriesItem.name != action.data.name)
    }
  }

  case "GET_EXTERIOR_ACCESSORIES":{
    return{
      ...state,
      exteriorAccessories: state.exteriorAccessories.concat(action.data)
    }
  }
  
  case "DELETE_EXTERIOR_ACCESSORIES":{
    return{
      ...state,
      exteriorAccessories: state.exteriorAccessories.filter(exteriorAccessoriesItem => exteriorAccessoriesItem.name != action.data.name)
    }
  }

  case "GET_GARAGE":{
    return{
      ...state,
      garage: state.garage.concat(action.data)
    }
  }
  
  case "DELETE_GARAGE":{
    return{
      ...state,
      garage: state.garage.filter(garageItem => garageItem.name != action.data.name)
    }
  }

  
  default:
  return state
  }
}
