import { ViewController, App, NavOptions } from 'ionic-angular';
import { Step } from './step';
export { Step } from './step';
export { Highlight } from './highlight';
export declare class Tour extends ViewController {
    private app;
    constructor(app: App, opts: TourOptions);
    present(navOptions?: NavOptions): Promise<any>;
    getTransitionName(direction: string): any;
    dismissAll(): void;
}
export declare class TourController {
    private app;
    constructor(app: App);
    create(opts: TourOptions): Tour;
}
export interface TourOptions {
    dismissOnPageChange?: boolean;
    steps: Array<Step>;
}
