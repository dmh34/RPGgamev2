import { Scene } from '@babylonjs/core';
import { State } from "./State";

/**
 *
 */

export class SceneStateManager {
    private _currentScene: Scene;
    private _currentState: State;

    /**
     *
     * @param scene
     */
    constructor(scene: Scene) {
        this._currentScene = scene;
        this._currentState = new State(this._currentScene);
    }





}
