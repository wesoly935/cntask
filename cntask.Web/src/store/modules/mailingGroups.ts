import { MutationTree, GetterTree, ActionTree, Module } from 'vuex';
import { IApplicationState } from '../state';
import { Endpoints } from '@/utils/enpoints';
import axios, { AxiosResponse } from 'axios';
import Vue from 'vue';
import { nameof } from 'ts-simple-nameof';
import store from '../store';

export interface MailingGroup {
  id?: string;
  name: string | null;
  receivers: string[];
}
export interface MailingGroupState {
  items: MailingGroup[];
}
const initialState: MailingGroupState = {
  items: [],
};

interface Mutations extends MutationTree<MailingGroupState> {
  setMailingGroups(state: MailingGroupState, mailingGroups: MailingGroupState[]): void;
}

const mutations: Mutations = {
  setMailingGroups(state, objects) {
    Vue.set(state, nameof<MailingGroupState>((x) => x.items), objects);
  },
};

const actions: ActionTree<MailingGroupState, IApplicationState> = {
  addMailingGroup(_, data: MailingGroup): Promise<void | AxiosResponse<any>> {
    return axios
      .post(Endpoints.MailingGroup, data)
      .then((response) => {
        if (response.status === 200) {
          store.dispatch('getMailingGroups');
        }
        return response;
      });
  },
  getMailingGroups({ commit }): Promise<void | AxiosResponse<any>> {
    return axios
      .get(Endpoints.MailingGroup)
      .then((response) => {
        if (response.status === 200) {
          commit(nameof<Mutations>((x) => x.setMailingGroups), response.data);
        }
        return response;
      });
  },
  removeMailingGroup(_, id: string): any {
    return axios
      .delete(Endpoints.MailingGroup + `/${id}`)
      .then((response) => {
        if (response.status === 200) {
          store.dispatch('getMailingGroups');
        }
        return response;
      });
  },
  updateMailingGroup(_, data: MailingGroup) {
    return axios
      .put(Endpoints.MailingGroup, data)
      .then((response) => {
        if (response.status === 200) {
          store.dispatch('getMailingGroups');
        }
        return response;
      });
  },
};

const getters: GetterTree<MailingGroupState, IApplicationState> = {
  mailingGroups: (state) => state.items,
  mailingGroupById: (state) => (id: string) => state.items.find((x) => x.id === id),
};

export const MailingGroup: Module<MailingGroupState, IApplicationState> = {
  state: initialState,
  mutations,
  actions,
  getters,
};
