import React from 'react';
import * as BABYLON from '@babylonjs/core';
//import * as GUI from '@babylonjs/gui';
import { Engine, Scene } from '@babylonjs/core';
import '../components/Host.css';
import pic from '../assets/sprites/warrior.png';
import pic2 from '../assets/sprites/rogue.png';
import pic3 from '../assets/sprites/cleric.png';
import skybox from '../assets/elyvisions/cav3_px.jpg';




export default class Host extends React.Component<{}, {}>{

    private _canvasRef: any;
    private _scene: any;
    private _engine: any;

    constructor(props: any) {
        super(props);
        this._canvasRef = React.createRef();


    }

    async componentDidMount() {
        console.log("loading 3d stuffs");
        // if('mediaDevices' in window.navigator && 'getUserMedia' in window.navigator.mediaDevices){
        //     console.log("Camera supported")
        //     const video = await window.navigator.mediaDevices.getUserMedia({video:true});
        // }


        this._engine = new Engine(this._canvasRef);
        this._scene = new Scene(this._engine);

        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this._scene);
        var light = new BABYLON.HemisphericLight("Light1", new BABYLON.Vector3(1, 1, 0), this._scene);
        
        var skybox = BABYLON.MeshBuilder.CreateBox('skybox', {size: 25}, this._scene);
        var skyboxmat = new BABYLON.StandardMaterial('skybox',this._scene);
        skyboxmat.backFaceCulling = false;
        skyboxmat.reflectionTexture = new BABYLON.CubeTexture(skybox.toString(), this._scene);
        skyboxmat.diffuseColor = new BABYLON.Color3(0,0,0);
        skyboxmat.specularColor = new BABYLON.Color3(0,0,0);
        skybox.material = skyboxmat;
        camera.upperBetaLimit = Math.PI/2.2;
        //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1}, this._scene);
        //var plane = BABYLON.MeshBuilder.CreatePlane("plane",{},this._scene);
        camera.attachControl(this._canvasRef,true);

    

        let sprite = new BABYLON.SpriteManager("playerSprite", pic, 1, { width: 32, height: 32 }, this._scene);
        let sprite2 = new BABYLON.SpriteManager("rouge", pic2, 1, { width: 32, height: 32 }, this._scene);
        let sprite3 = new BABYLON.SpriteManager("cleric", pic3, 1, { width: 32, height: 32 }, this._scene);

        let p = new BABYLON.Sprite("player", sprite);
        let p2 = new BABYLON.Sprite("rougesprite", sprite2);
        let p3 = new BABYLON.Sprite("rouges", sprite3);
        p.playAnimation(21, 30, true, 120);
        p2.playAnimation(21, 30, true, 120);
        p3.playAnimation(21, 30, true, 120);

        p.position = new BABYLON.Vector3(1.5, 1.5, 0);
        p2.position = new BABYLON.Vector3(1, 1, 0);
        p3.position = new BABYLON.Vector3(0.5, 0.5, 0);

        // var particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 1000000, randomTextureSize: 4096 }, this._scene);
        // particleSystem.start();

        this._engine.runRenderLoop(() => {
            //console.log("Render Loop");
            this._scene.render();
        })



    }



    render() {
        return (
            <div>
                <canvas id="game-host" ref={canvasRef => { this._canvasRef = canvasRef }} >


                </canvas>



            </div>
        )
    }

}