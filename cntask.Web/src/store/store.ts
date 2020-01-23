import Vue from 'vue';
import Vuex, { Store, StoreOptions } from 'vuex';
import { IApplicationState } from './state';
import { MailingGroup } from './modules/mailingGroups';
import { Snack } from './modules/snack';

Vue.use(Vuex);

const storeOptions: StoreOptions<IApplicationState> = {
  modules: {
    mailingGroup: MailingGroup,
    snack: Snack,
  },
};

const store = new Store<IApplicationState>(storeOptions);

export default store;
