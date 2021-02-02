import react from "react";

export interface IEvent{
    target: {
        value:string;
    }
}

export interface IEDataProcessing{
    node: {
        id:string,
        org:{
            name:string,
            classesLength:number,
            childrenLength:number,
            subjects: string[]
        }
    }
}

export interface IEGetParams{
    id:string,
    type:string,
    action:string
}

export interface IEMenuItem{
    name:string,
}