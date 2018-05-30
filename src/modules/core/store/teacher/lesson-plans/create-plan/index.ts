import {Module} from 'vuex';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';
import {CreatePlanState} from './types';
import {RootState} from '../../../types';

const namespaced: boolean = true;


export const state: CreatePlanState = {
    plan: null
};

export const module: Module<CreatePlanState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

export * from './namespace';
