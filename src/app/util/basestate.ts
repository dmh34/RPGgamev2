import { Engine, Scene,  ArcRotateCamera,Vector3 } from "@babylonjs/core";




export default class BaseState{
    
    private _scene: Scene;
    private _engine: Engine;

    constructor(scene: Scene, engine: Engine){
        this._scene = scene;
        this._engine = engine;
    }

    _unload(){
        this._scene.detachControl();
    }

    load(){
        //create new scence
        let newScence = new Scene(this._engine);
        //add camera
        let camera = new ArcRotateCamera("SceneCamera", Math.PI/2, Math.PI/2,0,Vector3.Zero(),newScence );
        //add lights

    }


}