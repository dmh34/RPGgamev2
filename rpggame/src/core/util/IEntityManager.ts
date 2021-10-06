/**
 * Manages all the entities in the enviroment.
 */

import IActor from "./IActor";

export interface IEntityManager {
}

export class EntityManager implements IEntityManager{
    private _entities: IActor[];

    constructor(){
        this._entities = [];
    }

    addEntitiy(actor: IActor):void {
        
    }

    
}
