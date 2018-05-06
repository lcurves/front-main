import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { UserState } from './types';
import { RootState } from '../types';


const namespaced: boolean = true;


export const state: UserState = {
    user: undefined,
    error: false,
    isAuthenticating: false
};

export const module: Module<UserState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

export * from './namespace';
