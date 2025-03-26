"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mmCTAClickHelper = void 0;
var mmCTAClickHelper = /** @class */ (function () {
    function mmCTAClickHelper() {
    }
    mmCTAClickHelper.triggerCTA = function () {
        var _a;
        var w = window;
        if ((_a = w.FbPlayableAd) === null || _a === void 0 ? void 0 : _a.onCTAClick) {
            console.log("✅ Facebook CTA");
            w.FbPlayableAd.onCTAClick();
        }
        else {
            console.log("⚠️ No known CTA, fallback triggered");
        }
    };
    return mmCTAClickHelper;
}());
exports.mmCTAClickHelper = mmCTAClickHelper;
