import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import {ITeacherState} from './types';
import { IRootState } from '../types';
import {modules} from './modules';


const namespaced: boolean = true;


export const state: ITeacherState = {

};

export const module: Module<ITeacherState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
    modules
};

export * from './namespace';
