import {Module} from 'vuex';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';
import {LessonPlansState} from './types';
import {RootState} from '../../types';
import {modules} from './modules';

const namespaced: boolean = true;


export const state: LessonPlansState = {};

export const module: Module<LessonPlansState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
    modules
};

export * from './namespace';
