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