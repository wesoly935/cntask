import { MutationTree, GetterTree, Module } from 'vuex';
import { IApplicationState } from '../state';
import Vue from 'vue';
import { nameof } from 'ts-simple-nameof';

export enum SnackType {
  info = 'success',
  error = 'error',
}
export interface Snack {
  text: string | null;
  type: SnackType | null;
  visible?: boolean;
}
export interface SnackState {
  message: Snack;
}
const initialState: SnackState = {
  message: {
    text: null,
    type: null,
    visible: false,
  },
};

interface Mutations extends MutationTree<SnackState> {
  setSnack(state: SnackState, data: Snack): void;
}

const mutations: Mutations = {
  setSnack(state, object) {
    const newState = {
      ...object,
    };
    newState.visible = true;
    Vue.set(state, nameof<SnackState>((x) => x.message), newState);
  },
  clearSnack(state) {
    const newState = {
      text: null,
      type: null,
      visible: false,
    };
    newState.visible = false;
    Vue.set(state, nameof<SnackState>((x) => x.message), newState);
  },
};

const getters: GetterTree<SnackState, IApplicationState> = {
  snackMessage: (state) => state.message,
};

export const Snack: Module<SnackState, IApplicationState> = {
  state: initialState,
  mutations,
  getters,
};
