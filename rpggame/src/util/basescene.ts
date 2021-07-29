import { Engine, Scene, Vector3 } from '@babylonjs/core';
import * as BABYLON from '@babylonjs/core';
import pic from '../assets/sprites/warrior.png';
import pic2 from '../assets/sprites/rogue.png';
import pic3 from '../assets/sprites/cleric.png';
import skybox1 from '../assets/elyvisions/arch3_bk.png';
import skybox2 from '../assets/elyvisions/arch3_dn.png';
import skybox3 from '../assets/elyvisions/arch3_ft.png';
import skybox4 from '../assets/elyvisions/arch3_lf.png';
import skybox5 from '../assets/elyvisions/arch3_rt.png';
import skybox6 from '../assets/elyvisions/arch3_up.png';

import { Enviroment } from './enviroment';

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
        //move to enviro
        var camera =
         new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this._scene);
        
         var light = new BABYLON.HemisphericLight("Light1", new BABYLON.Vector3(1, 1, 0), this._scene);

        var skybox = BABYLON.MeshBuilder.CreateBox('skybox', { size: 50}, this._scene);
        var skyboxmat = new BABYLON.StandardMaterial('skybox', this._scene);
        skyboxmat.backFaceCulling = false;
        skyboxmat.reflectionTexture = new BABYLON.CubeTexture('', this._scene, ['_bk.png', '_dn.png', '_ft.png', '_lf.png', '_rt.png', '_up.png'], false, [skybox1, skybox2, skybox3, skybox4, skybox5, skybox6]);
        skyboxmat.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxmat.specularColor = new BABYLON.Color3(0, 0, 0);
        skybox.material = skyboxmat;
        camera.upperBetaLimit = Math.PI / 2.2;
        camera.lowerBetaLimit = 0;
        camera.lowerRadiusLimit = 10;
        camera.upperRadiusLimit = 40;

        
        camera.attachControl(this._cancas, true);
        
        let height = 30;
        let width = 30;
        let enviro: Enviroment = new Enviroment(this._scene, height, width);
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
            //console.log("Render Loop");
            this._scene.render();
        })

        window.addEventListener('resize', ()=>{
            this._engine.resize();
            console.log("window resized")
        });
    }
}

