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
        if(sourceId && destinationId){
        console.log("im in action" ,sourceId-1,destinationId-1 );
        let sourceIndex = array.indexOf(sourceId-1);
        console.log("sourceIndex" ,sourceIndex );
        let destinationIndex = array.indexOf(destinationId-1);
        console.log("destinationIndex" ,destinationIndex );
        let temp:number;
        temp = array[sourceIndex];
        array[sourceIndex] = array[destinationIndex];
        array[destinationIndex] = temp;
        console.log("im in action array should be" ,array);

        dispatch(exchangeArrayElement(array));
        }
        else return;
    };
    
}







