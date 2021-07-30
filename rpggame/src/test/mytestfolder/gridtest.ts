
import {expect}  from "chai";

import Grid from "../../core/util/Grid";

describe("Grid Test",()=>{

    it('Grid should initialize',()=>{
        const testGrid = new Grid(20,20);
        expect(testGrid).to.not.be.undefined;
        testGrid.init();
        expect(testGrid.getGrid()).to.be.an('Array');

    })

    it('Grid spots should have a type',()=>{
        
    })

    it('Grid spot should be occupied',()=>{
        expect(false).to.equal(true);
    })
})