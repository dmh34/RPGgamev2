import { Vector3 } from '@babylonjs/core';
import IActor from '../util/IActor';

export default class Actor implements IActor{
    //#region fields
    private _agility : number;
    private _defense : number;
    private _vitality : number;
    private _strength : number;
    private _dexterty : number;
    private _charisma : number;
    private _mana : number;
    private _speed: number;
    private _currentSprite: string;
    private _position: Vector3;
    private _isAlive: boolean;


   
    
    
    //#endregion
    constructor(){
        this._agility = 0
        this._charisma = 0;
        this._defense = 0;
        this._dexterty =0;
        this._vitality =0;
        this._mana =0;
        this._strength = 0;
        this._speed = 0;
        this._isAlive = false;
        this._position = new Vector3();
        this._currentSprite = "";
    }
    move(): void {
        throw new Error('Method not implemented.');
    }
    //#region props
    public get strength() : number 
    {
        return this._strength;
    }
    public set strength(v : number)
    {
        this._strength = v;
    }
    
    public get Vitality() : number {
        return this._vitality;
    }
    public set Vitality(v : number) {
        this._vitality = v;
    }
    public get mana() : number {
        return this._mana;
    }
    
    public set mana(v : number) {
        this._mana = v;
    }
    
    public get defense() : number {
        return this._defense;
    }
    public set defense(v : number) {
        this._defense = v;
    }
    
    public get_agility() : number {
        return this._agility;
    }
    public set_agility(v : number) {
        this._agility = v;
    }

    public get dexterty() : number {
        return this._dexterty;
    }
    public set dexterty(v : number)
    {
        this._dexterty = v;
    }

    public get charisma() : number {
        return this._charisma;
    }
    public set charisma(v : number) {
        this._charisma = v;
    }
    
    //#endregion


}