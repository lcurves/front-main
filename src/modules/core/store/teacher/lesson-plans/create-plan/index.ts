import {Module} from 'vuex';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';
import {ICreatePlanState} from './types';
import {IRootState} from '../../../types';

const namespaced: boolean = true;


export const state: ICreatePlanState = {
    plan: null
};

export const module: Module<ICreatePlanState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

export * from './namespace';
