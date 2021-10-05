
import {expect}  from "chai";

import Grid from "../../core/util/Grid";
import {GridSize, SlotType} from "../../core/constants"
import { MoveValidator } from "../../core/util/MoveValidator";

describe("Grid Test",()=>{

    it('Grid should initialize',()=>{
        const testGrid = new Grid(GridSize.LARGE, new MoveValidator());
        expect(testGrid).to.not.be.undefined;
        testGrid.init();
        expect(testGrid.getGrid()).to.be.an('Array');

    })

    it('Grid spots should have a type',()=>{
        const testGrid = new Grid(GridSize.LARGE,new MoveValidator());
        testGrid.init();
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