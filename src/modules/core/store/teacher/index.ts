import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import {TeacherState} from './types';
import { RootState } from '../types';
import {modules} from './modules';


const namespaced: boolean = true;


export const state: TeacherState = {

};

export const module: Module<TeacherState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
    modules
};

export * from './namespace';
