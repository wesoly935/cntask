import * as tslib_1 from "tslib";
import Component from 'vue-class-component';
import Vue from 'vue';
var FormadDataCellMixin = /** @class */ (function (_super) {
    tslib_1.__extends(FormadDataCellMixin, _super);
    function FormadDataCellMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormadDataCellMixin.prototype.formatStringArray = function (val) {
        return val.join(', ');
    };
    FormadDataCellMixin = tslib_1.__decorate([
        Component
    ], FormadDataCellMixin);
    return FormadDataCellMixin;
}(Vue));
export default FormadDataCellMixin;
//# sourceMappingURL=formadDataCellMixin.js.map