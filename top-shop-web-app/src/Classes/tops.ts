import { SinkType } from "./sinkType";
import { TopPlacement } from "./TopPlacement";
import { TopType } from "./topType";

export interface Tops{
    id: number;
    topType: TopType;
    length: string;
    depth: string;
    lSide: string;
    rSide: string;
    hasSink: boolean;
    topPlacement: TopPlacement;
    sinkType: SinkType;
    sinkMeasurement: string;
    sinkSide: number;
}