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
    console.log(action)
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
              globalPrice : action.version.price,
              isFetching: false
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
            return{
                ...state,
                currentSelection : {
                ...state.currentSelection,
                rims : action.data,
                view: action.data.pictures
              },
              rimsPrice : action.data.price,
              globalPrice : state.versionColorPrice + state.sealPrice + action.data.price
            }
          } 
          case "CHOOSEN_SEAL":{
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
              return newState;
            }
          }
          case "DELETE_EQUIPMENT":{
            return{
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
            }
  
            case "GET_EQUIPMENT_ARRAY":{
              return{
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
                     [action.component]: state.jsonOption.equipment[action.component].filter(equipment => equipment.name != action.data.name)
                   }
                }
              }
            }
            case "DELETE_EQUIPMENT_ARRAY":{
              return{
                ...state,
                equipementsPrice : state.equipementsPrice - action.data.price,
                currentSelection:{
                  ...state.currentSelection,
                  equipment:{
                    ...state.currentSelection.equipment,
                    [action.component]: state.currentSelection.equipment[action.component].filter(equipment => equipment.name != action.data.name),
                  }}, 
                  jsonOption:{
                    ...state.jsonOption,
                    equipment:{
                      ...state.jsonOption.equipment,
                      [action.component]: state.jsonOption.equipment[action.component].concat(action.data),
                    }
                  }
               }
              }
              case "GET_ACCESSORIES":{
                return{
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
                }
              case "DELETE_ACCESSORIES":{
                return{
                  ...state,
                  accessoriesPrice : state.accessoriesPrice - action.data.price,
                  currentSelection:{
                    ...state.currentSelection,
                    accessories:{
                      ...state.currentSelection.accessories,
                      [action.component]: state.currentSelection.accessories[action.component].filter(equipment => equipment.name != action.data.name),
                    }}, 
                    jsonOption:{
                      ...state.jsonOption,
                      accessories:{
                        ...state.jsonOption.accessories,
                        [action.component]: state.jsonOption.accessories[action.component].concat(action.data),
                      }
                    }
                 }
                }
              
          default:
            return state
  }
}