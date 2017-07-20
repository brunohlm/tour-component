import { Injectable } from '@angular/core';
import { ViewController, App, NavOptions } from 'ionic-angular';
import { Step } from './step';
import { TourComponent } from './tour-component';

export { Step } from './step';
export { Highlight } from './highlight';

export class Tour extends ViewController {

  constructor(
    private app: App,
    opts: TourOptions
  ) {
    super(TourComponent, opts, null);
    this.isOverlay = true;
  }

  present(navOptions: NavOptions = {}) {
    return this.app.present(this, navOptions, 1);
  }

  getTransitionName(direction: string) {
    let key = (direction === 'back' ? 'modalLeave' : 'modalEnter');
    return this._nav && (<any>this._nav).config.get(key);
  }

  dismissAll() {
    this._nav && this._nav.popAll();
  }

}

@Injectable()
export class TourController {

  constructor(private app: App) {}

  create(opts: TourOptions) {
    return new Tour(this.app, opts);
  }

}

export interface TourOptions {
  dismissOnPageChange?: boolean;
  steps: Array<Step>;
}
