import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { MailingGroup } from './modules/mailingGroups';
import { Snack } from './modules/snack';
Vue.use(Vuex);
var storeOptions = {
    modules: {
        mailingGroup: MailingGroup,
        snack: Snack,
    },
};
var store = new Store(storeOptions);
export default store;
//# sourceMappingURL=store.js.map