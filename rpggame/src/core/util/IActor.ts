import { Vector3 } from "@babylonjs/core";

export default interface IActor{
     
    move(newPosition: Vector3):void;
    getPosition(): Vector3;
}

