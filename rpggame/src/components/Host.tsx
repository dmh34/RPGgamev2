import React from 'react';
import * as BABYLON from '@babylonjs/core';
//import * as GUI from '@babylonjs/gui';
import { Engine, Scene } from '@babylonjs/core';
import '../components/Host.css';
import pic from '../assets/sprites/warrior.png';
import pic2 from '../assets/sprites/rogue.png';
import pic3 from '../assets/sprites/cleric.png';
import skybox1 from '../assets/elyvisions/arch3_bk.png';
import skybox2 from '../assets/elyvisions/arch3_dn.png';
import skybox3 from '../assets/elyvisions/arch3_ft.png';
import skybox4 from '../assets/elyvisions/arch3_lf.png';
import skybox5 from '../assets/elyvisions/arch3_rt.png';
import skybox6 from '../assets/elyvisions/arch3_up.png';
import { Driver } from '../util/basescene';




export default class Host extends React.Component<{}, {}>{

    private _canvasRef: any;
    private _scene:any;
    private _engine:any;

    constructor(props: any) {
        super(props);
        this._canvasRef = React.createRef();
        


    }

    async componentDidMount() {
        console.log("loading 3d stuffs");
        
        let d: Driver = new Driver(this._canvasRef);
        d.show();
        



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