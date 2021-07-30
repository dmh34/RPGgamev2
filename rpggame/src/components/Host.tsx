import React from 'react';
import '../components/Host.css';
import { Driver } from '../core/util/basescene';

export default class Host extends React.Component<{}, {}>{

    private _canvasRef: any;
    

    constructor(props: any) {
        super(props);
        this._canvasRef = React.createRef();
    }

    async componentDidMount() {

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