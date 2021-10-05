import IActor from "./IActor";

//import {GameEntity} from 'yuka';
export interface IGrid {
    /**
     * Checks if the current grid slot is occupied.
     * @param row the row that the slot is located in.
     * @param col the column that the slot is located in.
     * @returns true if the slot is empty false otherwise
     */
    isValidMove(row: number, col: number): boolean;

    
    /**
     * Initializes the grid
     */
    init(): void;

    /**
     * returns the entire grid
     */
    getGrid(): number[][];
    /**
     * Returns the type of the spot on the 
     * @param row 
     * @param col 
     */
    getType(row:number, col: number): number;

    /**
     * Returns true if spot is occupied.
     * @param row 
     * @param col 
     */
    isOccupied(row:number, col:number):boolean;

    updateGrid(actor: IActor):void



}
