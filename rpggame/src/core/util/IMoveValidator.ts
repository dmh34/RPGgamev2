import IActor from "./IActor";
import { IGrid } from "./IGrid";

export default interface IMoveValidator {
    validateMove(grid: IGrid, actor: IActor): boolean
}


