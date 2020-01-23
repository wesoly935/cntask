import * as tslib_1 from "tslib";
import Vue from 'vue';
import { nameof } from 'ts-simple-nameof';
export var SnackType;
(function (SnackType) {
    SnackType["info"] = "success";
    SnackType["error"] = "error";
})(SnackType || (SnackType = {}));
var initialState = {
    message: {
        text: null,
        type: null,
        visible: false,
    },
};
var mutations = {
    setSnack: function (state, object) {
        var newState = tslib_1.__assign({}, object);
        newState.visible = true;
        Vue.set(state, nameof(function (x) { return x.message; }), newState);
    },
    clearSnack: function (state) {
        var newState = {
            text: null,
            type: null,
            visible: false,
        };
        newState.visible = false;
        Vue.set(state, nameof(function (x) { return x.message; }), newState);
    },
};
var getters = {
    snackMessage: function (state) { return state.message; },
};
export var Snack = {
    state: initialState,
    mutations: mutations,
    getters: getters,
};
//# sourceMappingURL=snack.js.map