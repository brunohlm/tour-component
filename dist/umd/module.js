(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "ionic-angular", "./components/tour/tour-component", "./components/tour/tour", "./components/tour/step", "./components/tour/highlight", "./components/tour/highlight-element"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var ionic_angular_1 = require("ionic-angular");
    var tour_component_1 = require("./components/tour/tour-component");
    var tour_1 = require("./components/tour/tour");
    var step_1 = require("./components/tour/step");
    var highlight_1 = require("./components/tour/highlight");
    var highlight_element_1 = require("./components/tour/highlight-element");
    var TourComponentModule = (function () {
        function TourComponentModule() {
        }
        return TourComponentModule;
    }());
    TourComponentModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        step_1.Step,
                        highlight_1.Highlight,
                        highlight_element_1.HighlightElement,
                        tour_component_1.TourComponent,
                        tour_1.Tour
                    ],
                    imports: [
                        ionic_angular_1.IonicPageModule.forChild(tour_component_1.TourComponent),
                    ],
                    providers: [
                        tour_1.TourController
                    ],
                    exports: [
                        step_1.Step,
                        highlight_1.Highlight,
                        highlight_element_1.HighlightElement,
                        tour_component_1.TourComponent,
                        tour_1.Tour
                    ]
                },] },
    ];
    TourComponentModule.ctorParameters = function () { return []; };
    exports.TourComponentModule = TourComponentModule;
});
//# sourceMappingURL=module.js.map