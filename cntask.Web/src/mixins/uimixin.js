import * as tslib_1 from "tslib";
import Component from 'vue-class-component';
import Vue from 'vue';
import { SnackType } from '@/store/modules/snack';
import { Mutation } from 'vuex-class';
var UIMixin = /** @class */ (function (_super) {
    tslib_1.__extends(UIMixin, _super);
    function UIMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIMixin.prototype.setErrorMessage = function (message) {
        this.setSnack({
            text: message,
            type: SnackType.error,
        });
    };
    UIMixin.prototype.setSuccessMessage = function () {
        this.setSnack({
            text: 'Zapisano zmiany',
            type: SnackType.info,
        });
    };
    UIMixin.prototype.setResponseInfo = function (response) {
        if (response.status === 200) {
            this.setSuccessMessage();
        }
        else {
            this.setErrorMessage(response.data);
        }
    };
    tslib_1.__decorate([
        Mutation
    ], UIMixin.prototype, "setSnack", void 0);
    UIMixin = tslib_1.__decorate([
        Component
    ], UIMixin);
    return UIMixin;
}(Vue));
export default UIMixin;
//# sourceMappingURL=uimixin.js.map