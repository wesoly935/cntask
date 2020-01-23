import * as tslib_1 from "tslib";
import Component from 'vue-class-component';
import Vue from 'vue';
var ValidationRulesMixin = /** @class */ (function (_super) {
    tslib_1.__extends(ValidationRulesMixin, _super);
    function ValidationRulesMixin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tslint:disable-next-line:max-line-length
        _this.emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        _this.emailRulesCombobox = [
            function (v) { return v && v.length > 0 || 'Pole jest wymagane'; },
            function (v) { return (_this.isArrayEmailsValid(v)) || 'Wprowadź poprawny adres e-mail'; },
        ];
        _this.requiredRules = [
            function (v) { return !!v && v.trim().length > 0 || 'Pole jest wymagane'; },
        ];
        return _this;
    }
    ValidationRulesMixin.prototype.isArrayEmailsValid = function (val) {
        var _this = this;
        var result = true;
        if (val === null || val.length === 0) {
            return true;
        }
        val.forEach(function (x) {
            if (!_this.emailPattern.test(x)) {
                result = false;
            }
        });
        return result;
    };
    ValidationRulesMixin = tslib_1.__decorate([
        Component
    ], ValidationRulesMixin);
    return ValidationRulesMixin;
}(Vue));
export default ValidationRulesMixin;
//# sourceMappingURL=validationMixin.js.map