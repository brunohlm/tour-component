(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "ionic-angular", "lodash"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var ionic_angular_1 = require("ionic-angular");
    var lodash_1 = require("lodash");
    var TourComponent = (function () {
        function TourComponent(viewController, elementRef, navParams, config, renderer, gestureCtrl) {
            var _this = this;
            this.viewController = viewController;
            this.elementRef = elementRef;
            this.slides = [];
            this.steps = navParams.get('steps');
            this.steps.forEach(function (step, index) { return _this.addStep(step, index); });
            renderer.setElementClass(elementRef.nativeElement, "loading-" + config.get('mode'), true);
            this.gestureBlocker = gestureCtrl.createBlocker(ionic_angular_1.BLOCK_ALL);
        }
        TourComponent.prototype.ionViewWillEnter = function () {
            this.gestureBlocker.block();
        };
        TourComponent.prototype.ionViewDidEnter = function () {
            var _this = this;
            setTimeout(function () {
                _this.tourBd.nativeElement.classList.add('fade-in');
                _this.bindElements();
            });
        };
        TourComponent.prototype.ionViewDidLeave = function () {
            this.gestureBlocker.unblock();
        };
        TourComponent.prototype.ngOnDestroy = function () {
            this.gestureBlocker.destroy();
        };
        TourComponent.prototype.hideShownElements = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var shownEls = _this.elementRef.nativeElement.getElementsByClassName('show');
                [].slice.call(shownEls).forEach(function (el) { return el.classList.remove('show'); });
                resolve();
            });
        };
        TourComponent.prototype.bindElements = function () {
            var _this = this;
            var currentIndex = this.slider.getActiveIndex(), promiseChain = Promise.resolve();
            if (currentIndex < 0 || this.slider.length() < currentIndex + 1) {
                return;
            }
            this.hideShownElements().then(function () {
                if (_this.slides[currentIndex].hasOwnProperty('events')) {
                    _this.slides[currentIndex].events.forEach(function (event) {
                        promiseChain = promiseChain.then(function () {
                            return event.before(_this.slides[currentIndex].elements);
                        });
                    });
                }
                promiseChain
                    .then(function () {
                    _this.appendElements(currentIndex);
                })
                    .then(function () {
                    if (_this.slides[currentIndex].hasOwnProperty('events')) {
                        _this.slides[currentIndex].events.forEach(function (event) { return event.after; });
                    }
                });
            });
        };
        TourComponent.prototype.addStep = function (step, index) {
            var _this = this;
            this.slides.push({ elements: [], loaded: false, events: [] });
            step.highlights.forEach(function (highlight) {
                highlight.elements().then(function (element) {
                    _this.slides[index].elements = lodash_1.default.concat(_this.slides[index].elements || [], element);
                    if (highlight.options.event) {
                        _this.slides[index].events.push(highlight.options.event);
                    }
                });
            });
        };
        TourComponent.prototype.appendElements = function (currentIndex) {
            var _this = this;
            if (currentIndex) {
                this.hideAppendedElements(currentIndex - 1);
            }
            if (currentIndex < this.slides.length - 1) {
                this.hideAppendedElements(currentIndex + 1);
            }
            this.slides[currentIndex].elements.forEach(function (element) {
                var appendable = element.clone || element.original;
                if (!_this.slides[currentIndex].loaded) {
                    _this.slider._slides[currentIndex].appendChild(appendable);
                }
                setTimeout(function () {
                    element.repositionClone();
                    element.respositionOriginalByOffset();
                    appendable.classList.add('show');
                });
            });
            this.slides[currentIndex].loaded = true;
        };
        TourComponent.prototype.hideAppendedElements = function (index) {
            this.slides[index].elements.forEach(function (element) {
                var appendable = element.clone || element.original;
                appendable.classList.remove('show');
            });
        };
        TourComponent.prototype.dismiss = function (role) {
            return this.viewController.dismiss(null, role);
        };
        return TourComponent;
    }());
    TourComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tour',
                    template: "\n    <div class=\"tour modal-wrapper\">\n      <div #bd class=\"tour-bd\"></div>\n      <ion-slides [pager]=\"true\" (ionSlideDidChange)=\"bindElements()\">\n        <ion-slide *ngFor=\"let slide of slides\"></ion-slide>\n      </ion-slides>\n      <div class=\"center-button\">\n        <button ion-button clear class=\"close\" (click)=\"dismiss('backdrop')\">\n          <ion-icon name=\"md-close\" class=\"icon\"></ion-icon>\n        </button>\n      </div>\n    </div>\n  ",
                    host: {
                        'role': 'dialog'
                    },
                    encapsulation: core_1.ViewEncapsulation.None,
                },] },
    ];
    TourComponent.ctorParameters = function () { return [
        { type: ionic_angular_1.ViewController, },
        { type: core_1.ElementRef, },
        { type: ionic_angular_1.NavParams, },
        { type: ionic_angular_1.Config, },
        { type: core_1.Renderer, },
        { type: ionic_angular_1.GestureController, },
    ]; };
    TourComponent.propDecorators = {
        'slider': [{ type: core_1.ViewChild, args: [ionic_angular_1.Slides,] },],
        'tourBd': [{ type: core_1.ViewChild, args: ['bd',] },],
    };
    exports.TourComponent = TourComponent;
});
//# sourceMappingURL=tour-component.js.map