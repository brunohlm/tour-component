import { ElementRef, Renderer } from '@angular/core';
import { BlockerDelegate, GestureController, ViewController, Config, NavParams, Slides } from 'ionic-angular';
import { Step } from './step';
import { HighlightEvent } from './highlight';
export declare class TourComponent {
    private viewController;
    private elementRef;
    slider: Slides;
    tourBd: any;
    steps: Array<Step>;
    slides: Array<{
        elements: any;
        loaded: boolean;
        events: Array<HighlightEvent>;
    }>;
    gestureBlocker: BlockerDelegate;
    constructor(viewController: ViewController, elementRef: ElementRef, navParams: NavParams, config: Config, renderer: Renderer, gestureCtrl: GestureController);
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewDidLeave(): void;
    ngOnDestroy(): void;
    private hideShownElements();
    bindElements(): void;
    private addStep(step, index);
    private appendElements(currentIndex);
    private hideAppendedElements(index);
    dismiss(role?: string): Promise<any>;
}
