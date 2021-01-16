

import * as types from "../types";
const initialState = {
    isSpawned: false,
};



const enemyReducer = (state = initialState, action) => {
  switch (action.type) {
   
      case types.ENEMY_SPAWNED:
       
        return{
          ...state,
          enemy: action.payload,
          isSpawned: true,
        }
        case types.UPDATE_ENEMY_HEALTH:
          return {
            ...state,
            enemy: action.payload,
            isSpawned: true,
          }
          case types.ENEMY_STATS_RESET:
            return {
              ...state,
              enemy: action.payload,
             
            }
    default:
      return state;
  }
};

export default enemyReducer;