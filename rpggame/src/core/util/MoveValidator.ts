import IActor from "./IActor";
import { IGrid } from "./IGrid";
import IMoveValidator from "./IMoveValidator";


export class MoveValidator implements IMoveValidator {
    validateMove(grid: IGrid, actor: IActor): boolean {
        throw new Error("Method not implemented.");
    }

}
