import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourComponent } from './components/tour/tour-component';
import { TourController } from './components/tour/tour';

@NgModule({
  declarations: [
    TourComponent
  ],
  imports: [
    IonicPageModule.forChild(TourComponent),
  ],
  providers: [
    TourController
  ],
  exports: [
    TourComponent
  ]
})
export class TourComponentModule {
}
