import { WeaponType } from "../constants"
export default class Equipment
{
    private _weaponType: number;
    private _attack: number;
    
    constructor(weaponType: number, attack: number){
        this._attack = attack;
        this._weaponType = weaponType;
    }
    //bonuses are applied based off the type of weapon. eg.. Long swords give a bigger attack bonus
    // but reduce agi and eva.

}