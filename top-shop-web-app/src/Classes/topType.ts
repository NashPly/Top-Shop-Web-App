export class TopType {
    public hasBackSPL!: boolean;
    public depth!: number;
    public title!: string;

    
    constructor(bspl: boolean, d:number, t:string){
        this.title = t;
        this.depth = d;
        this.hasBackSPL = bspl;
    }
}