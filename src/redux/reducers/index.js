export const initialState = {
  version: null,
  photoPure : '/AlpineCars_app-images/sources-homepage/versions/ALPINE-PURE-1.png',
  photoLegende : '/AlpineCars_app-images/sources-homepage/versions/ALPINE-LEGENDE-1.png',
  jsonVersion : {},
  jsonOption : null,
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
    equipment:{
      innCustom : [],
      parkAssist:null,
      exhaust: null, 
      confort:null,
      design: [],
      logo: null, 
      stirrups: null,
      telemetrics: null,
      audioSystem: null,
      brake: null,
    },

    accessories:{
      interior : [],
      multimedia : [],
      transportAndProtection : [],
      exterior : [],
      garage: [],
    },
  }, 
  globalPrice : 0,
  versionColorPrice : 0,
  rimsPrice : 0,
  sealPrice : 0,
  equipementsPrice : 0,
  accessoriesPrice : 0,
  menu: null,
  equipementPannel: null
  };
   
  export const dataStore = (state = initialState, action) => {
    switch (action.type){
     
        case "GET_VERSION":{
          let newState = {};
          newState = {
              ...state, 
              version : action.data
            }
            sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
            return newState
        }
        case "GET_RES_JSON":{
      
            let newState = {};
            newState = {
              ...state,
              jsonVersion : action.version,
              jsonOption : action.option,
              sealingJson : action.version.sealing.characteristic,
              globalPrice : action.version.price,
              isFetching: false
            }
            sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
          return newState
        }
        case "FETCHING_DATA":{
          return{
            ...state,
            isFetching:true,
          }
        }
        case "CHOOSEN_COLOR":{
          let newState = {};
          newState = {
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
          sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
          return newState
        }

        case "GET_STATE_FROM_STORAGE":{
          let newState = {};
          newState =  action.data
          


          return newState
        }

        case "CHOOSEN_RIMS":{
          
          let newState = {};
          newState = {
              ...state,
              currentSelection : {
                ...state.currentSelection,
                rims : action.data,
                view: action.data.pictures
              },
              rimsPrice : action.data.price,
              globalPrice : state.versionColorPrice + state.sealPrice + action.data.price
          }
          
          sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
          return newState
        } 
        case "CHOOSEN_SEAL":{

          let newState = {};
          newState = {
            ...state,
            currentSelection : {
              ...state.currentSelection,
              sealing : action.data
            },
            sealPrice : action.data.price,
            globalPrice : state.versionColorPrice + state.rimsPrice + action.data.price
          }
          sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
          return newState
        }  
          case "GET_MENU":{
            return{
              ...state,
            menu : action.data
            }
        }
        case "GET_EQUIPEMENT_PANNEL":{
          return{
            ...state,
          equipementPannel : action.data
          }
       }
        case "GET_EQUIPMENT":{

          let newState = {};

          if(state.currentSelection.equipment[action.component]){
              newState = {
                ...state,
                equipementsPrice : (state.equipementsPrice - state.currentSelection.equipment[action.component].price) + action.data.price, 
                currentSelection:{
                  ...state.currentSelection,
                  equipment:{
                    ...state.currentSelection.equipment,
                    [action.component] : action.data
                  }
                } 
              }
            sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
            return newState;
          }else{
            newState = {
              ...state,
              equipementsPrice : state.equipementsPrice + action.data.price, 
              currentSelection:{
                ...state.currentSelection,
                equipment:{
                  ...state.currentSelection.equipment,
                  [action.component] : action.data
                }
              } 
            }
            sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
            return newState;
          }
        }
        case "DELETE_EQUIPMENT":{

          let newState = {};
          newState = {
            ...state,
            equipementsPrice : state.equipementsPrice - action.data.price,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                [action.component] : null
                }
              }
            }
            sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
            return newState
          }

          case "GET_EQUIPMENT_ARRAY":{
            let newState = {};
            newState = {
              ...state,
              equipementsPrice : state.equipementsPrice + action.data.price,
              currentSelection:{
                ...state.currentSelection,
                equipment:{
                  ...state.currentSelection.equipment,
                  [action.component]: state.currentSelection.equipment[action.component].concat(action.data),
                }}, 
                jsonOption:{
                 ...state.jsonOption,
                 equipment:{
                   ...state.jsonOption.equipment,
                   [action.component]: state.jsonOption.equipment[action.component].filter(equipment => equipment.name !== action.data.name)
                 }
              }
            }
            sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
            return newState
          }
          case "DELETE_EQUIPMENT_ARRAY":{
            let newState = {};
            newState = {
              ...state,
              equipementsPrice : state.equipementsPrice - action.data.price,
              currentSelection:{
                ...state.currentSelection,
                equipment:{
                  ...state.currentSelection.equipment,
                  [action.component]: state.currentSelection.equipment[action.component].filter(equipment => equipment.name !== action.data.name),
                }}, 
                jsonOption:{
                  ...state.jsonOption,
                  equipment:{
                    ...state.jsonOption.equipment,
                    [action.component]: state.jsonOption.equipment[action.component].concat(action.data),
                  }
                }
             }
            sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
            return newState
            }
            case "GET_ACCESSORIES":{
              let newState = {};
              newState = {
                ...state,
                accessoriesPrice : state.accessoriesPrice + action.data.price,
                currentSelection:{
                  ...state.currentSelection,
                  accessories:{
                    ...state.currentSelection.accessories,
                    [action.component]: state.currentSelection.accessories[action.component].concat(action.data),
                  }
                }, 
                jsonOption:{
                   ...state.jsonOption,
                  accessories:{
                  ...state.jsonOption.accessories,
                  [action.component]: state.jsonOption.accessories[action.component].filter(accessorie => accessorie.name !== action.data.name)
                  }
                }
              }
            sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
              return newState
              }
            case "DELETE_ACCESSORIES":{
              let newState = {};
              newState = {
                ...state,
                accessoriesPrice : state.accessoriesPrice - action.data.price,
                currentSelection:{
                  ...state.currentSelection,
                  accessories:{
                    ...state.currentSelection.accessories,
                    [action.component]: state.currentSelection.accessories[action.component].filter(equipment => equipment.name !== action.data.name),
                  }}, 
                  jsonOption:{
                    ...state.jsonOption,
                    accessories:{
                      ...state.jsonOption.accessories,
                      [action.component]: state.jsonOption.accessories[action.component].concat(action.data),
                    }
                  }
               }
              sessionStorage.setItem("currentConfiguration", JSON.stringify(newState))
              return newState
            }
            
        default:
          return state
}
}