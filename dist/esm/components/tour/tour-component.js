import { Component, ElementRef, ViewEncapsulation, Renderer, ViewChild } from '@angular/core';
import { GestureController, ViewController, BLOCK_ALL, Config, NavParams, Slides } from 'ionic-angular';
import _ from 'lodash';
var TourComponent = (function () {
    function TourComponent(viewController, elementRef, navParams, config, renderer, gestureCtrl) {
        var _this = this;
        this.viewController = viewController;
        this.elementRef = elementRef;
        this.slides = [];
        this.steps = navParams.get('steps');
        this.steps.forEach(function (step, index) { return _this.addStep(step, index); });
        renderer.setElementClass(elementRef.nativeElement, "loading-" + config.get('mode'), true);
        this.gestureBlocker = gestureCtrl.createBlocker(BLOCK_ALL);
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
                _this.slides[index].elements = _.concat(_this.slides[index].elements || [], element);
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
export { TourComponent };
TourComponent.decorators = [
    { type: Component, args: [{
                selector: 'tour',
                template: "\n    <div class=\"tour modal-wrapper\">\n      <div #bd class=\"tour-bd\"></div>\n      <ion-slides [pager]=\"true\" (ionSlideDidChange)=\"bindElements()\">\n        <ion-slide *ngFor=\"let slide of slides\"></ion-slide>\n      </ion-slides>\n      <div class=\"center-button\">\n        <button ion-button clear class=\"close\" (click)=\"dismiss('backdrop')\">\n          <ion-icon name=\"md-close\" class=\"icon\"></ion-icon>\n        </button>\n      </div>\n    </div>\n  ",
                host: {
                    'role': 'dialog'
                },
                encapsulation: ViewEncapsulation.None,
            },] },
];
TourComponent.ctorParameters = function () { return [
    { type: ViewController, },
    { type: ElementRef, },
    { type: NavParams, },
    { type: Config, },
    { type: Renderer, },
    { type: GestureController, },
]; };
TourComponent.propDecorators = {
    'slider': [{ type: ViewChild, args: [Slides,] },],
    'tourBd': [{ type: ViewChild, args: ['bd',] },],
};
//# sourceMappingURL=tour-component.js.map