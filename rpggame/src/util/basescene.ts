import {Engine, Scene} from '@babylonjs/core';
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

/**
 * 
 */
export class SceneStateManager{
    private _currentScene:Scene;
    private _currentState:State;

    /**
     * 
     * @param scence 
     */
    constructor(scence: Scene){
        this._currentScene = scence;
        this._currentState = new State(this._currentScene);
    }





}

class State {
    //private _outState;
    //private _inState;

    /**
     * Creates a new state
     * @param prevState The state to change from.
     */
    constructor(prevState: Scene){
       //this._outState;
       
    }


}

export class Driver{
    private _scene: Scene;
    private _engine: Engine;
    private _cancas: any;

    constructor(canvas:any){
        this._cancas = canvas;
        this._engine = new Engine(canvas);
        this._scene = new Scene(this._engine);

    }

    show(){
        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this._scene);
        var light = new BABYLON.HemisphericLight("Light1", new BABYLON.Vector3(1, 1, 0), this._scene);
        
        var skybox = BABYLON.MeshBuilder.CreateBox('skybox', {size: 100}, this._scene);
        var skyboxmat = new BABYLON.StandardMaterial('skybox',this._scene);
        skyboxmat.backFaceCulling = false;
        skyboxmat.reflectionTexture = new BABYLON.CubeTexture('', this._scene,['_bk.png','_dn.png','_ft.png','_lf.png','_rt.png','_up.png'],false,[skybox1,skybox2,skybox3,skybox4,skybox5,skybox6]);
        skyboxmat.diffuseColor = new BABYLON.Color3(0,0,0);
        skyboxmat.specularColor = new BABYLON.Color3(0,0,0);
        skybox.material = skyboxmat;
        camera.upperBetaLimit = Math.PI/2.2;
        camera.lowerBetaLimit = 0;
        camera.lowerRadiusLimit = 10;
        camera.upperRadiusLimit = 40;
        
        var plane = BABYLON.MeshBuilder.CreatePlane("plane",{size: 100},this._scene);
        plane.addRotation(Math.PI/2,0,0);
        camera.attachControl(this._cancas,true);


        let sprite = new BABYLON.SpriteManager("playerSprite", pic, 1, { width: 32, height: 32 }, this._scene);
        let sprite2 = new BABYLON.SpriteManager("rouge", pic2, 1, { width: 32, height: 32 }, this._scene);
        let sprite3 = new BABYLON.SpriteManager("cleric", pic3, 1, { width: 32, height: 32 }, this._scene);

        console.log("from driver");
        let p = new BABYLON.Sprite("player", sprite);
        let p2 = new BABYLON.Sprite("rougesprite", sprite2);
        let p3 = new BABYLON.Sprite("rouges", sprite3);
        p.playAnimation(21, 30, true, 120);
        p2.playAnimation(21, 30, true, 120);
        p3.playAnimation(21, 30, true, 120);

        p.position = new BABYLON.Vector3(1.5, 0.5, 0);
        p2.position = new BABYLON.Vector3(1, 0.5, 0);
        p3.position = new BABYLON.Vector3(0.5, 0.5, 0);

        // var particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 1000000, randomTextureSize: 4096 }, this._scene);
        // particleSystem.start();
        
        this._engine.runRenderLoop(() => {
            //console.log("Render Loop");
            this._scene.render();
        })

    }
}

export  const imgdir = {
    skyBoxTextureDir: "rpggame/src/assets/elyvisions/cav3"
}