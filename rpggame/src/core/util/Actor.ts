import {  Vector3, Sprite, SpriteManager,Scene } from '@babylonjs/core';
import IActor from '../util/IActor';
import { Coordinate } from './Coordinate';
import { IActorAttributes } from './IActorAttributes';

export default class Actor implements IActor{
    //#region fields
 
    private _currentSprite: string;
    private _position: Vector3;
    private _sprite: Sprite;
    private _spriteManager: SpriteManager;
    private _scene: Scene;
    private _actorAttributes: IActorAttributes;


   
    
    
    //#endregion
    constructor(actorAttributes: IActorAttributes, positon: Coordinate, currentSprite: string, scene:Scene ,pickable?:boolean, animated?: boolean){
        this._scene = scene;
        this._actorAttributes = actorAttributes;
        this._position = new Vector3(positon.x, positon.y, positon.z);
        this._currentSprite = currentSprite;
        this._spriteManager = new SpriteManager("sprite1", this._currentSprite, 1,{ width: 32, height: 32 }, this._scene);
        this._sprite = new Sprite("sprite", this._spriteManager);
        this._sprite.position = this._position;
        
        if(animated){
            this._sprite.playAnimation(21,30,true, 120);
            this._sprite.isVisible = true;
            
        }

        if(pickable){
            this._sprite.isPickable = pickable;
            this._spriteManager.isPickable = pickable;
        }
        console.log(this._position);
    }
    getPosition(): Vector3 {
        return  this._position;
    }
    move(newPosition: Vector3): void {
        this._position = newPosition;
        console.log(this._position);
    }
    //#region props
   
  
   public get actorAttributes() : IActorAttributes {
       return this._actorAttributes;
   }
   public set actorAttributes(v : IActorAttributes) {
       this._actorAttributes = v;
   }

  
    //#endregion


}

