export interface Finish {
    id: number;
    name: string;
}
export function createFinish(id:number,name:string) : Finish{
    return{
        id,
        name,
    }
}