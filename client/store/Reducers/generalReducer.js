

import * as types from "../types";
const initialState = {
   
};



const generalReducer = (state = initialState, action) => {
  switch (action.type) {
   
      case types.GET_WEATHER:
       
        return{
          ...state,
          weather: action.payload,
          
        }
        
    default:
      return state;
  }
};

export default generalReducer;