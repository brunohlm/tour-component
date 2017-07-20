import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TourComponentModule } from '../components/tour/tour.module';

@NgModule({
  declarations: [
    TourComponentModule
  ],
  imports: [
    BrowserModule,
    // TourComponentModule,
    IonicModule.forRoot(TourComponentModule)
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    TourComponentModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class TourModule {
}
