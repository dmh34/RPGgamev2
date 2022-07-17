import * as GUI from 'babylonjs-gui';
import { Image } from 'babylonjs-gui/2D/index';
import { ICommand } from '../util/ICommand';

export class BaseUI{
    

     /**
      *
      */
     protected width: number;
     protected height: number;

     constructor(imageUri: string, width: number, length: number) {
         this.height = length;
         this.width = width;
     }
}

export interface UIElement{
     height: number;
     width: number;
     
     attachEvent(command?: ICommand):void
     attachOnEnterBehavior(behavior?: IBehavior ) :void
     attachOnExitBehavior(behavior?: IBehavior): void
}

export interface IBehavior{
     executeBehavior():void
}

export class UIButton implements UIElement{
     public height: number;
     public width: number;

     public button: GUI.Button
     constructor(height: number, width:number){
          this.height = height;
          this.width = width;
          this.button = GUI.Button.CreateSimpleButton("theButton", "New Button");
     }
     attachEvent(command?: ICommand): void {
          this.button.onPointerClickObservable.add(function(){
               console.log("This button has been clicked.")
          })
     }
     attachOnEnterBehavior(behavior?: IBehavior): void {
          this.button.onPointerDownObservable.add(function(){
               console.log("Pointer has been entered hit box")
          })
     }
     attachOnExitBehavior(behavior?: IBehavior): void {
          this.button.onPointerOutObservable.add(function(){
               console.log("Pointer has exited the hit box")
          })
     }

}