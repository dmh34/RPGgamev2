import { Engine, Scene, Vector3 } from '@babylonjs/core';
import * as BABYLON from '@babylonjs/core';
import pic from '../../assets/sprites/warrior.png';
import pic2 from '../../assets/sprites/rogue.png';
import pic3 from '../../assets/sprites/cleric.png';

import { Enviroment} from './enviroment';
import { IEnviroment } from './IEnviroment';
import { GridSize } from '../constants';


export class Driver {
    private _scene: Scene;
    private _engine: Engine;
    private _cancas: any;

    constructor(canvas: any) {
        this._cancas = canvas;
        this._engine = new Engine(canvas);
        this._scene = new Scene(this._engine);

    }

    show() {
        
       
       
        let enviro: IEnviroment = new Enviroment(this._scene,this._cancas,GridSize.LARGE );
        enviro.init();

       
        
      


        let sprite = new BABYLON.SpriteManager("playerSprite", pic, 1, { width: 32, height: 32 }, this._scene);
        let sprite2 = new BABYLON.SpriteManager("rouge", pic2, 1, { width: 32, height: 32 }, this._scene);
        let sprite3 = new BABYLON.SpriteManager("cleric", pic3, 1, { width: 32, height: 32 }, this._scene);
        sprite.isPickable = true;
        
        
        let p = new BABYLON.Sprite("player", sprite);
        p.isPickable = true;
        
        
        let p2 = new BABYLON.Sprite("rougesprite", sprite2);
        let p3 = new BABYLON.Sprite("rouges", sprite3);
        p.playAnimation(21, 30, true, 120);
        p2.playAnimation(21, 30, true, 120);
        p3.playAnimation(21, 30, true, 120);

        p.position = new BABYLON.Vector3(1.5, 1, 0);
        p2.position = new BABYLON.Vector3(1, 1, 0);
        p3.position = new BABYLON.Vector3(0.5, 1, 0);

      

        this._engine.runRenderLoop(() => {        
            this._scene.render();
        });

        window.addEventListener('resize', ()=>{
            this._engine.resize();
            console.log("window resized")
        });
      
    }
}
  

