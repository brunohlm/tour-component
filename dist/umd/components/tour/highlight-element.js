(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HighlightElement = (function () {
        function HighlightElement(original, clone, offset) {
            this.boundingRectRefElements = [];
            this.original = original;
            this.clone = clone;
            this.offset = offset;
        }
        HighlightElement.prototype.repositionClone = function () {
            var _this = this;
            if (!this.clone) {
                return false;
            }
            setTimeout(function () {
                _this.clone.style.setProperty('top', _this.original.getBoundingClientRect().top + 'px', 'important');
            });
            return true;
        };
        HighlightElement.prototype.respositionOriginalByOffset = function () {
            if (!this.offset || !this.original) {
                return;
            }
            var highlightBoundingRect = this.highlightBoundingRect();
            if (this.offset.top !== undefined) {
                this.original.style['top'] = highlightBoundingRect.bottom + this.offset.top + 'px';
            }
            else if (this.offset.bottom !== undefined) {
                this.original.style['top'] = highlightBoundingRect.top - this.offset.bottom - this.original.scrollHeight + 'px';
            }
            if (this.offset.left !== undefined) {
                this.original.style['left'] = highlightBoundingRect.right + this.offset.left + 'px';
            }
            else if (this.offset.right !== undefined) {
                this.original.style['left'] = highlightBoundingRect.left - this.offset.right + 'px';
            }
        };
        HighlightElement.prototype.highlightBoundingRect = function () {
            var boundingRect = { top: 0, right: 0, bottom: 0, left: 0 };
            this.boundingRectRefElements.forEach(function (element) {
                var elementBoundingRect = element.getBoundingClientRect();
                boundingRect = {
                    top: elementBoundingRect.top > boundingRect.top ? elementBoundingRect.top : boundingRect.top,
                    right: elementBoundingRect.right > boundingRect.right ? elementBoundingRect.right : boundingRect.right,
                    bottom: elementBoundingRect.bottom > boundingRect.bottom ? elementBoundingRect.bottom : boundingRect.bottom,
                    left: elementBoundingRect.left > boundingRect.left ? elementBoundingRect.left : boundingRect.left
                };
            });
            return boundingRect;
        };
        return HighlightElement;
    }());
    exports.HighlightElement = HighlightElement;
});
//# sourceMappingURL=highlight-element.js.map