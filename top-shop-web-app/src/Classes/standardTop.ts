import { TopType } from "./topType";

// export class StandardTop {
//     public width!: number;
//     public depth!: number;
//     public lCap!: string;
//     public rCap!: string;
//     public sinkType!: string;
//     public sinkMeas!: string;
//     public sinkSide!: string;
//    // public type!: TopType;
    
//     constructor(){}
// }

export interface StandardTop{
    width:number;
    depth: number;
    lCap: string;
    rCap: string;
    sinkType: string;
    sinkMeas: string;
    sinkSide: string;
}