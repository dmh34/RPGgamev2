import * as BABYLON from '@babylonjs/core';

import Grid from './Grid';
import { IGrid } from "./IGrid";
import texture from '../../assets/terrain/savanna_dry_d.jpg';
import normalTexture from '../../assets/terrain/savanna_dry_n.jpg';
import mudTexture from '../../assets/terrain/ground_mud_d.jpg';
import snowTexture from '../../assets/terrain/snow2_d.jpg';
import snowTextureNormal from '../../assets/terrain/snow2_n.jpg';
import mudTextureNormal from '../../assets/terrain/ground_mud_n.jpg';
import { IEnviroment } from './IEnviroment';

//skybox
import skybox1 from '../../assets/elyvisions/arch3_bk.png';
import skybox2 from '../../assets/elyvisions/arch3_dn.png';
import skybox3 from '../../assets/elyvisions/arch3_ft.png';
import skybox4 from '../../assets/elyvisions/arch3_lf.png';
import skybox5 from '../../assets/elyvisions/arch3_rt.png';
import skybox6 from '../../assets/elyvisions/arch3_up.png';
import { SlotType } from '../constants';


/**
 * Creates an enviroment with a skybox and Grid.
 */
export class Enviroment implements IEnviroment {
    private _scene: BABYLON.Scene;

    private _height: number;
    private _width: number;

    private _canvas: any;
    private _maxRadius: number;
    private _minRadius: number;
    private _enviormentGrid: IGrid;


    constructor(scene: BABYLON.Scene, canvas: any, size: number, maxCameraRadius?: number, minCameraRadius?: number) {
        this._scene = scene;

        this._height = size;
        this._width = size;
        this._canvas = canvas;
        this._maxRadius = maxCameraRadius ?? 40;
        this._minRadius = minCameraRadius ?? 10;
        this._enviormentGrid = new Grid(this._height, this._width);

    }


    //move to grid
    private _init() {
        for (let i = 0; i < this._height; i++) {
            for (let j = 0; j < this._width; j++) {
                this._addMesh(i, j, 0);
            }
        }
    }


    private _addMesh(x: number, y: number, z: number) {
        let mesh = BABYLON.MeshBuilder.CreateBox("box" + x + " : " + y, { size: 1 }, this._scene);
        mesh.position =
            new BABYLON.Vector3(-1 * ((this._width / 2) - x), 0, -1 * ((this._height / 2) - y));

        let mat = new BABYLON.StandardMaterial("texture", this._scene);

        if (this._enviormentGrid.getType(x, y) === SlotType.GRASS) {
            mat.diffuseTexture = new BABYLON.Texture(texture, this._scene);
            mat.bumpTexture = new BABYLON.Texture(normalTexture, this._scene);
        } else if (this._enviormentGrid.getType(x, y) === SlotType.SNOW) {
            mat.diffuseTexture = new BABYLON.Texture(snowTexture, this._scene);
            mat.bumpTexture = new BABYLON.Texture(snowTextureNormal, this._scene);
        } else if (this._enviormentGrid.getType(x, y) === SlotType.MUD) {
            mat.diffuseTexture = new BABYLON.Texture(mudTexture, this._scene);
            mat.bumpTexture = new BABYLON.Texture(mudTextureNormal, this._scene);
        } else if (this._enviormentGrid.getType(x, y) === SlotType.WATER) {
            mat.diffuseTexture = new BABYLON.Texture(snowTexture, this._scene);
            mat.bumpTexture = new BABYLON.Texture(snowTextureNormal, this._scene);
        }

        mesh.material = mat;
    }

    public init() {
        this._enviormentGrid.init();
        this._init();
        var camera =
            new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this._scene);

        var light = new BABYLON.HemisphericLight("Light1", new BABYLON.Vector3(1, 1, 0), this._scene);

        var skybox = BABYLON.MeshBuilder.CreateBox('skybox', { size: 100 }, this._scene);
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


        camera.attachControl(this._canvas, true);
    }
}

