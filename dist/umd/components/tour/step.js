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
    var Step = (function () {
        function Step() {
            this.highlights = [];
        }
        Step.prototype.addHighlight = function (highlight) {
            this.highlights.push(highlight);
        };
        return Step;
    }());
    exports.Step = Step;
});
//# sourceMappingURL=step.js.map