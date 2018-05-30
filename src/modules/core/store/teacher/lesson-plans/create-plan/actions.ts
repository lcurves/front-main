import {ActionTree} from 'vuex';
import {CreatePlanState} from './types';
import {RootState} from '../../../types';
import {MUTATIONS} from './mutations';

export enum ACTIONS {
    createNewPlan = 'createNewPlan'
}

export const actions: ActionTree<CreatePlanState, RootState> = {
    [ACTIONS.createNewPlan]: ({commit}) => {
        commit(MUTATIONS.createNewPlan);
    }
};
