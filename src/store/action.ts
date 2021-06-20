import * as types from './actionType';
import {DispatchType} from '../types/type';

const addElementAction = (array:number[]) => {

    return{
        type:types.ELEMENT_ADDED,
        payload:[...array]
    }
}
const removeElement = (array:number[]) => {

    return{
        type:types.ELEMENT_ADDED,
        payload:[...array]
    }
}
const exchangeArrayElement = (array:number[]) => {

    return{
        type:types.ELEMENT_EXCHANGE,
        payload:[...array]
    }
}
export const saveCounter = (counter:number) => {
    return{
        type:types.COUNTER_SAVED,
        payload:[counter]
    }

}
export const addCounter = (counter:number) => {
    return{
        type:types.COUNTER_ADDED,
        payload:[counter]
    }

}


export const AddElement = (array:number[]) => {

    return(dispatch:DispatchType) => 
    {
       dispatch(addElementAction(array));
    };
    
}
export const removeElementById = (id:number,array:number[]) => {
   
    return(dispatch:DispatchType) => 
    {
        let index = array.indexOf(id);
        array.splice(index,1);
       dispatch(removeElement(array));
    };
    
}
export const exchangeElements = (sourceId:number|undefined,destinationId:number|undefined,array:number[]) => {
   
    return(dispatch:DispatchType) => 
    {
        //in some situation for type of mouse event it may be generate undefined event.target
        if(sourceId && destinationId){
        // swap to elements of array using temp
            let sourceIndex = array.indexOf(sourceId-1);
            let destinationIndex = array.indexOf(destinationId-1);
            let temp:number;
            temp = array[sourceIndex];
            array[sourceIndex] = array[destinationIndex];
            array[destinationIndex] = temp;
            dispatch(exchangeArrayElement(array));
        }
        else return;
    };
    
}







