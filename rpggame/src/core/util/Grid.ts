import SimplexNoise from "simplex-noise";
import { IGrid } from "./IGrid";
import { GridBitMasks, SlotType } from "../constants";

/**
 * Manages grid attributes and units on the grid.
 */
export default class Grid implements IGrid{
    private _grid: number[][];
    private _noiseGen: SimplexNoise ;
    private _length: number;
    private _width: number;


    constructor(length:number, width: number, notRandomized?: boolean, premadeGrid?: number[][]) {
        this._grid = [[]];
        this._length = length;
        this._width = width;
        this._noiseGen = new SimplexNoise();
    }

    private _generate(nx:number , ny:number){
        return this._noiseGen.noise2D(nx,ny)/2 + 0.5;
    }

    getGrid(): number[][] {
        return this._grid;
    }
    getType(row: number, col: number): number {
        return (this._grid[row][col] & GridBitMasks.TYPE) >> 1;
    }
    isOccupied(row: number, col: number): boolean {
        
        return ((this._grid[row][col]&GridBitMasks.OCCUPIED) == 1)? true: false;
    }
    init(): void {
        
        for(let i = 0; i < this._length; i++){
            this._grid[i] = []
            for(let j = 0; j < this._width; j++){
                let nx = i/this._width - 0.5, ny = j/this._length - 0.5;
                //this._grid[i][j] = this._generate(nx,ny);
                this._assignType(i,j,this._generate(nx,ny));
                
            }
        }
    }

    private _assignType(row:number, col: number, generatedNumber: number){
        let spotType: number =0;
        if(generatedNumber < 0.2){
            spotType = SlotType.GRASS;
        }else if (generatedNumber < 0.3){
            spotType = SlotType.GRAVEL;
        }else if (generatedNumber < 0.4){
            spotType = SlotType.MUD;
        }else if(generatedNumber < 0.5){
            spotType = SlotType.WATER;
        }

        this._grid[row][col] = spotType << 1;
    }
    /**
     * Returns the current grid.
     */
    get grid(){
        return this._grid;
    }

    public isValidMove(row: number, col: number): boolean {
        return true;
    }

  



}





