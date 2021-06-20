import * as actionTypes from './actionType';
import {AppStateType ,ActionType} from '../types/type'


const initialState : AppStateType = {
    elementList : [],
    cardCount:0
}


const reducer = (state:AppStateType=initialState,action:ActionType) : AppStateType =>{

 switch (action.type) {
     case actionTypes.ELEMENT_ADDED:
         return{
             ...state,
             elementList:action.payload
         }
     case actionTypes.ELEMENT_REMOVED:
         return{
             ...state,
             elementList:action.payload
         }
     case actionTypes.ELEMENT_EXCHANGE:
         return{
             ...state,
             elementList:action.payload
         }
     case actionTypes.COUNTER_SAVED:
         return{
             ...state,
             cardCount:action.payload[0]
         }
     case actionTypes.COUNTER_ADDED:
         return{
             ...state,
             cardCount:action.payload[0]
         }
          
     default:
         return state;

 }
}

export default  reducer;