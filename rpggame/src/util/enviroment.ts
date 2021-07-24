import * as BABYLON from '@babylonjs/core';
import { MeshAssetTask } from '@babylonjs/core';
import SimplexNoise from 'simplex-noise';
import Grid from '../util/Grid';
import texture from '../assets/terrain/savanna_dry_d.jpg';
import normalTexture from '../assets/terrain/savanna_dry_n.jpg';
import mudTexture from '../assets/terrain/ground_mud_d.jpg';
import snowTexture from '../assets/terrain/snow2_d.jpg';
import snowTextureNormal from '../assets/terrain/snow2_n.jpg';
import mudTextureNormal from '../assets/terrain/ground_mud_n.jpg';

export class Enviroment{
    private _scene: BABYLON.Scene;
    private _noiseGen: SimplexNoise;
    private _height: number;
    private _width: number;
    private _grid: number[][];


    constructor(scene: BABYLON.Scene, height: number, width: number){
        this._scene = scene;
        this._noiseGen = new SimplexNoise("Math.random.toString()");
        this._height = height;
        this._width = width;
        this._grid = [[]];
    }

    private generate(nx:number , ny:number){
        return this._noiseGen.noise2D(nx,ny)/2 + 0.5;
    }

    private async _init(){
        

        for(let i = 0; i < this._height; i++){
            this._grid[i] = []
            for(let j = 0; j < this._width; j++){
                let nx = i/this._width - 0.5, ny = j/this._height - 0.5;
                this._grid[i][j] = this.generate(nx,ny);
                this._addMesh(i,j,0);
            }
        }
        console.log(this._grid);
    }

    private _addMesh(x: number, y: number, z: number){
        let mesh = BABYLON.MeshBuilder.CreateBox("box" + x + " : " + y,{size: 1}, this._scene);
        mesh.position = new BABYLON.Vector3(-1*((this._width/2)-x),0,-1*((this._height/2)-y));
        
        let mat = new BABYLON.StandardMaterial("texture", this._scene);
        
        if (this._grid[x][y] < 0.2){
            mat.diffuseTexture = new BABYLON.Texture(texture, this._scene);
            mat.bumpTexture = new BABYLON.Texture(normalTexture, this._scene);    
        }else if(this._grid[x][y] < 0.4){
            mat.diffuseTexture = new BABYLON.Texture(snowTexture,this._scene);
            mat.bumpTexture = new BABYLON.Texture(snowTextureNormal, this._scene);
        }else if (this._grid[x][y]<1.0){
            mat.diffuseTexture= new BABYLON.Texture(mudTexture,this._scene);
            mat.bumpTexture = new BABYLON.Texture(mudTextureNormal, this._scene);
        }
        
        mesh.material = mat;
    }

    public init(){
        this._init();
    }
}

export enum GridBitMasks{
    OCCUPIED = 0x1,
    TYPE = 0x1fe,
    HEIGHT = 0x1e00

}