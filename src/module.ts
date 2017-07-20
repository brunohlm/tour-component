import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourComponent } from './components/tour/tour-component';
import { Tour, TourController } from './components/tour/tour';
import { Step } from './components/tour/step';
import { Highlight } from './components/tour/highlight';
import { HighlightElement } from './components/tour/highlight-element';

@NgModule({
  declarations: [
    Step,
    Highlight,
    HighlightElement,
    TourComponent,
    Tour
  ],
  imports: [
    IonicPageModule.forChild(TourComponent),
  ],
  providers: [
    TourController
  ],
  exports: [
    Step,
    Highlight,
    HighlightElement,
    TourComponent,
    Tour
  ]
})
export class TourComponentModule {
}
