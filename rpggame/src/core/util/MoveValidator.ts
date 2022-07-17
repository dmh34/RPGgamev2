import IActor from "./IActor";
import { IGrid } from "./IGrid";
import IMoveValidator from "./IMoveValidator";


export class MoveValidator implements IMoveValidator {
    validateMove(grid: IGrid, actor: IActor): boolean {
        //check the terrian type, if passable check next
        //if the occupied with unit, check if friendly
            //if friendly move is valid and other unit is moved behind the currently moving unit.
            //if not friendly move don't allow move.
        throw new Error("Method not implemented.");
    }

}
