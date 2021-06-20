

export interface AppStateType {
    elementList:number[],
    cardCount:number
}

export type ActionType = {
    type:string,
    payload:number[]
}

export type CardPropType = {
    area:string;
    text:number;
    key:number;
}

export type DispatchType = (args:ActionType) => ActionType;