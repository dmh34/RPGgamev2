import { BabylonFileLoaderConfiguration, Engine, PickingInfo, PointerInfo, Scene, Vector3 } from '@babylonjs/core';
import * as GUI from 'babylonjs-gui';
import * as BABYLON from '@babylonjs/core';
import pic from '../../assets/sprites/warrior.png';
import pic2 from '../../assets/sprites/rogue.png';
import pic3 from '../../assets/sprites/cleric.png';

import { Enviroment } from './enviroment';
import { IEnviroment } from './IEnviroment';
import { GridSize } from '../constants';
import { XmlLoader } from 'babylonjs-gui/2D/xmlLoader';





export class Driver {
    private _scene: Scene;
    private _engine: Engine;
    private _cancas: any;
    

    constructor(canvas: any) {
        this._cancas = canvas;
        this._engine = new Engine(canvas);
        this._scene = new Scene(this._engine);
        
        this._scene.onPointerObservable.add((info: PointerInfo) => {
            if (info.type === BABYLON.PointerEventTypes.POINTERPICK)
                console.log("picked")
            if (info.type === BABYLON.PointerEventTypes.POINTERDOWN) {
                
                let picked = this._scene.pickSprite(this._scene.pointerX, this._scene.pointerY);
                if (picked != null && picked.hit) {
                    if (picked.pickedSprite != null) {
                        console.log("sprite picked")
                        
                        //picked.pickedSprite.position.x += 1;
                        this.displayValidMoves(picked);
                    }
                }
            }

        })
    }

    private displayValidMoves(pickedSprite: PickingInfo): void {
        if (pickedSprite.pickedSprite != null) {
            let mesh = BABYLON.MeshBuilder.CreateBox("mesh", { size: 1 }, this._scene);
            mesh.position = new Vector3(pickedSprite.pickedSprite.position.x + 1, 1, 0);
            mesh.isPickable =true;
            let mat = new BABYLON.StandardMaterial("mats", this._scene);
            mat.alpha = 0.5;
            mat.diffuseColor = new BABYLON.Color3(0,0,255);
            
            mesh.material = mat;
            /*
             get valid moves 
            */
            
        }
    }

    show() {



        let enviro: IEnviroment = new Enviroment(this._scene, this._cancas, GridSize.LARGE);
        enviro.init();
        let testGUI = GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI", true, this._scene);
        // let button =  GUI.Button.CreateSimpleButton("mybutton", "button");
        // button.width = 0.15;
        // button.height = 0.15;
        // button.cornerRadius = 9;
        // button.background = "blue";
        // button.topInPixels = -200;
        // testGUI.addControl(button);




        let sprite = new BABYLON.SpriteManager("playerSprite", pic, 1, { width: 32, height: 32 }, this._scene);
        let sprite2 = new BABYLON.SpriteManager("rouge", pic2, 1, { width: 32, height: 32 }, this._scene);
        let sprite3 = new BABYLON.SpriteManager("cleric", pic3, 1, { width: 32, height: 32 }, this._scene);
        sprite.isPickable = true;
        sprite2.isPickable = true;
        sprite3.isPickable = true;


        let p = new BABYLON.Sprite("player", sprite);
        p.isPickable = true;



        let p2 = new BABYLON.Sprite("rougesprite", sprite2);
        let p3 = new BABYLON.Sprite("rouges", sprite3);
        p2.isPickable = true;
        p3.isPickable = true;

        p.playAnimation(21, 30, true, 120);
        p2.playAnimation(21, 30, true, 120);
        p3.playAnimation(21, 30, true, 120);

        p.position = new BABYLON.Vector3(2, 1, 0);
        p2.position = new BABYLON.Vector3(1, 1, 0);
        p3.position = new BABYLON.Vector3(3, 1, 0);



        this._engine.runRenderLoop(() => {
            this._scene.render();


            // console.log(s);

        });

        window.addEventListener('resize', () => {
            this._engine.resize();
            console.log("window resized")
        });

    }
}


