import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourComponent } from './components/tour/tour-component';
import { TourController } from './components/tour/tour';
var TourComponentModule = (function () {
    function TourComponentModule() {
    }
    return TourComponentModule;
}());
export { TourComponentModule };
TourComponentModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
TourComponentModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map