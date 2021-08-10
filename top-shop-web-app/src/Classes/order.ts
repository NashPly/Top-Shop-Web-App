export interface Order {
    [key: string]:any;
    [key: number]:any;
    id:number;
    kitchenTop:number;
    vanityTop:number;
    barTop:number;
    rightLCorner:number;
    leftLCorner:number;
    uShaped:number;
}

// export class OrderSelection{
//     //TODO number variable for all types of top
//     //Maybe arrays of top Objects to iterate through

//     public type!:string;
//     public file!:string;
//     public quantity!:string;


//     constructor(){}

// }