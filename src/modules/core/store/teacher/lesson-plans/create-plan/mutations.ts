import {MutationTree} from 'vuex';
import {ICreatePlanState} from './types';
import {LessonPlan} from '../types';

export enum MUTATIONS {
    initiateNewPlan = 'initiateNewPlan',
    nameChanged = 'nameChanged'
}

export const mutations: MutationTree<ICreatePlanState> = {
    [MUTATIONS.initiateNewPlan]: (state: ICreatePlanState) => {
        state.plan = new LessonPlan();
    },
    [MUTATIONS.nameChanged]: (state: ICreatePlanState, name) => {
        state.plan.name = name;
    }
};
