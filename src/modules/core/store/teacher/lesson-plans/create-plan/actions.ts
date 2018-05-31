import {ActionTree} from 'vuex';
import {ICreatePlanState} from './types';
import {IRootState} from '../../../types';
import {MUTATIONS} from './mutations';

export enum ACTIONS {
    initiateNewPlan = 'initiateNewPlan',
    nameChanged = 'nameChanged'
}

export const actions: ActionTree<ICreatePlanState, IRootState> = {
    [ACTIONS.initiateNewPlan]: ({commit}) => {
        commit(MUTATIONS.initiateNewPlan);
    },
    [ACTIONS.nameChanged]: ({commit}, name: string) => {
        commit(MUTATIONS.nameChanged, name);
    }
};
