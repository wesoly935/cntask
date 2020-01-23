import { Endpoints } from '@/utils/enpoints';
import axios from 'axios';
import Vue from 'vue';
import { nameof } from 'ts-simple-nameof';
import store from '../store';
var initialState = {
    items: [],
};
var mutations = {
    setMailingGroups: function (state, objects) {
        Vue.set(state, nameof(function (x) { return x.items; }), objects);
    },
};
var actions = {
    addMailingGroup: function (_, data) {
        return axios
            .post(Endpoints.MailingGroup, data)
            .then(function (response) {
            if (response.status === 200) {
                store.dispatch('getMailingGroups');
            }
            return response;
        });
    },
    getMailingGroups: function (_a) {
        var commit = _a.commit;
        return axios
            .get(Endpoints.MailingGroup)
            .then(function (response) {
            if (response.status === 200) {
                commit(nameof(function (x) { return x.setMailingGroups; }), response.data);
            }
            return response;
        });
    },
    removeMailingGroup: function (_, id) {
        return axios
            .delete(Endpoints.MailingGroup + ("/" + id))
            .then(function (response) {
            if (response.status === 200) {
                store.dispatch('getMailingGroups');
            }
            return response;
        });
    },
    updateMailingGroup: function (_, data) {
        return axios
            .put(Endpoints.MailingGroup, data)
            .then(function (response) {
            if (response.status === 200) {
                store.dispatch('getMailingGroups');
            }
            return response;
        });
    },
};
var getters = {
    mailingGroups: function (state) { return state.items; },
    mailingGroupById: function (state) { return function (id) { return state.items.find(function (x) { return x.id === id; }); }; },
};
export var MailingGroup = {
    state: initialState,
    mutations: mutations,
    actions: actions,
    getters: getters,
};
//# sourceMappingURL=mailingGroups.js.map