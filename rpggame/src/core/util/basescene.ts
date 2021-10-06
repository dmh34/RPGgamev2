import { Engine, PickingInfo, PointerInfo, Scene, Vector3 } from '@babylonjs/core';
import * as GUI from 'babylonjs-gui';
import * as BABYLON from '@babylonjs/core';
import pic from '../../assets/sprites/warrior.png';
import pic2 from '../../assets/sprites/rogue.png';
import pic3 from '../../assets/sprites/cleric.png';

import { Enviroment } from './enviroment';
import { IEnviroment } from './IEnviroment';
import { GridSize } from '../constants';
import IActor from './IActor';
import Actor from './Actor';






export class Driver {
    private _scene: Scene;
    private _engine: Engine;
    private _canvas: any;
    private _lastpicked: any;
    private _moves: BABYLON.Mesh[][];
    //private actor: IActor;


    constructor(canvas: any) {
        this._canvas = canvas;
        this._engine = new Engine(canvas);
        this._scene = new Scene(this._engine);
        this._moves = [];
        //this.actor = new Actor({agility: 3, defense: 3, vitiality: 3, strength: 3, dexterity: 3, charisma: 3, mana: 3, speed: 3, isAlive: true}, new Vector3(2,2,1), pic,this._scene, true, true);
        this._scene.onPointerObservable.add((info: PointerInfo) => {
          
            if (info.type === BABYLON.PointerEventTypes.POINTERDOWN) {
                let otherPicked = this._scene.pick(this._scene.pointerX, this._scene.pointerY);

                if (otherPicked?.pickedMesh?.name === 'mesh') {
                    
                    console.log(otherPicked?.pickedMesh.position);
                    this._lastpicked.pickedSprite.position.set(otherPicked.pickedMesh.position.x, otherPicked.pickedMesh.position.y, otherPicked.pickedMesh.position.z);
                    for(let i = 0; i < 5; i++){
                        for (let j = 0; j < 5; j++){
                            this._moves[i][j].dispose();
                        }
                    }
                    console.log("removing move meshes");
                    return;
                }
                let picked = this._scene.pickSprite(this._scene.pointerX, this._scene.pointerY);
                if (picked != null && picked.hit) {
                    if (picked.pickedSprite != null) {
                     
                        this._lastpicked = picked;
                        this.displayValidMoves(picked);


                    }
                }
            }

        })
    }

    private displayValidMoves(pickedSprite: PickingInfo): void {
        if (pickedSprite.pickedSprite != null) {


            for (let i = 0; i < 5; i++) {
                this._moves[i] = [];
                for (let j = 0; j < 5; j++) {
                    let mesh = BABYLON.MeshBuilder.CreateBox("mesh", { size: 1 }, this._scene);
                    mesh.position = new Vector3(-1 * (Math.floor((5 / 2)) - pickedSprite.pickedSprite.position.x) + i, 1, -1 * (Math.floor((5 / 2)) - pickedSprite.pickedSprite.position.z)+j);
                    mesh.isPickable = true;
                    let mat = new BABYLON.StandardMaterial("mats", this._scene);
                    mat.alpha = 0.5;
                    mat.diffuseColor = new BABYLON.Color3(0, 0, 255);

                    mesh.material = mat;
                    this._moves[i][j] = mesh;
                }
            }
            /*
             get valid moves 
            */

        }
    }

    show() {



        let enviro: IEnviroment = new Enviroment(this._scene, this._canvas, GridSize.LARGE);
        enviro.init();
        let testGUI = GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI", true, this._scene);
        // let button =  GUI.Button.CreateSimpleButton("mybutton", "button");
        // button.width = 0.15;
        // button.height = 0.15;
        // button.cornerRadius = 9;
        // button.background = "blue";
        // button.topInPixels = -200;
        // testGUI.addControl(button);
        let actor: IActor = new Actor({agility: 3, defense: 3, vitiality: 3, strength: 3, dexterity: 3, charisma: 3, mana: 3, speed: 3, isAlive: true}, {x:3, y: 1, z: 0}, pic,this._scene, true, true);
        let actor2: IActor = new Actor({agility: 3, defense: 3, vitiality: 3, strength: 3, dexterity: 3, charisma: 3, mana: 3, speed: 3, isAlive: true}, {x:4, y: 1, z: 0}, pic,this._scene, true, true);
        


     


       

        this._engine.runRenderLoop(() => {
            this._scene.render();

            

        });

        window.addEventListener('resize', () => {
            this._engine.resize();
            console.log("window resized")
        });

    }
}


