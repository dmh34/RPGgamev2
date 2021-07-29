import SimplexNoise from "simplex-noise";

/**
 * Manages grid attributes and units on the grid.
 */
export default class Grid implements IGrid{
    private _grid: number[][];
    private _noiseGen: SimplexNoise;
    private _length: number;
    private _width: number;


    constructor(length:number, width: number) {
        this._grid = [[]];
        this._length = length;
        this._width = width;
        this._noiseGen = new SimplexNoise();
    }
    init(): void {
        throw new Error("Method not implemented.");
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

    public addGridSlot(row: number, col: number): void{
        
    }



}

export interface IGrid{
    /**
     * Checks if the current grid slot is occupied. 
     * @param row the row that the slot is located in.
     * @param col the column that the slot is located in.
     * @returns true if the slot is empty false otherwise
     */
    isValidMove(row: number, col: number): boolean;
    
    addGridSlot(row: number, col: number):void;
    /**
     * Initializes the grid 
     */
    init():void;


}

export enum GridBitMasks{

    OCCUPIED = 0x1,
    TYPE = 0x1fe,
    HEIGHT = 0x1e00

}

export enum SlotType{
    SAND = 1,
    GRASS,
    MUD,
    SNOW,
    WATER,
    GRAVEL,
    STONE
}

