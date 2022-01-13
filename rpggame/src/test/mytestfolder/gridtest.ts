
import {expect}  from "chai";

import Grid from "../../core/util/Grid";
import {GridSize, SlotType} from "../../core/constants"
import { MoveValidator } from "../../core/util/MoveValidator";
import IActor from "../../core/util/IActor";
import { Vector3 } from "@babylonjs/core";
import Actor from "../../core/util/Actor";

describe("Grid Test",()=>{

    let testGrid: Grid;
    before(()=>{
        testGrid = new Grid(GridSize.LARGE,new MoveValidator());
        testGrid.init();
    })

    it('Grid should initialize',()=>{
        
        expect(testGrid.getGrid()).to.be.an('Array');

    })

    it('Grid spots should have a type',()=>{
       
        let sType= 0;
        for(let i =0 ; i < GridSize.LARGE; i++){
            for(let j = 0; j < GridSize.LARGE; j++){
                sType =testGrid.getType(i,j); 
                expect(sType).to.be.equal((SlotType.GRASS|SlotType.GRAVEL|SlotType.MUD|SlotType.SNOW|SlotType.SAND|SlotType.STONE|SlotType.WATER)&sType)
            }
        }
    })

    it('Grid spot should be occupied',()=>{
        const testGrid = new Grid(GridSize.LARGE,new MoveValidator());
        testGrid.init();
        for(let i = 0; i < GridSize.LARGE; i++){
            for(let j = 0; j < GridSize.LARGE; j++){
                expect(testGrid.isOccupied(i,j))
            }
        }
        
    })
})

class ActorStub implements IActor{
    
    constructor(private pos:Vector3){}
    move(newPosition: Vector3): void {
    
    }
    getPosition(): Vector3 {
       return this.pos;
    }

}