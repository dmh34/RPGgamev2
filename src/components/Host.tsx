import React from 'react';
import * as BABYLON from '@babylonjs/core';
import * as GUI from '@babylonjs/gui';
import { Engine, Scene } from '@babylonjs/core';
import '../components/Host.css';
import pic from '../warrior.png';
import pic2 from '../../public/wizard.png'





export default class Host extends React.Component<{},{}>{

    private _canvasRef: any;
    private _scene: any;
    private _engine: any;

    constructor(props:any){
        super(props);
        this._canvasRef = React.createRef();
       
    }
   
    componentDidMount(){
        console.log("loading 3d stuffs");
        
        this._engine = new Engine(this._canvasRef);
        this._scene = new Scene(this._engine);
        var camera = new BABYLON.ArcRotateCamera ("Camera", Math.PI/2, Math.PI/2,2, BABYLON.Vector3.Zero(), this._scene);
        var light =  new BABYLON.HemisphericLight("Light1", new BABYLON.Vector3(1,1,0), this._scene);
        //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1}, this._scene);
        //var plane = BABYLON.MeshBuilder.CreatePlane("plane",{},this._scene);
        camera.attachControl(this._canvasRef,true);

        let sprite = new BABYLON.SpriteManager("playerSprite", pic,1,{width:32, height: 32}, this._scene);
        
        let p =  new BABYLON.Sprite("player", sprite);
        p.playAnimation(21,30,true,120);
        p.position = new BABYLON.Vector3(1,1,1);
       
        var particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity:1000000, randomTextureSize: 4096 }, this._scene);
        particleSystem.start();
        
        this._engine.runRenderLoop(()=>{
            console.log("Render Loop");
            this._scene.render();
        })
     
    }

    

    render(){
        return(
            <div>
                <canvas id="game-host" ref={canvasRef=>{this._canvasRef = canvasRef}} >
               

                </canvas>
                
            </div>
        )
    }
    
    onCanvasLoad(){
      
       

       

    }
}