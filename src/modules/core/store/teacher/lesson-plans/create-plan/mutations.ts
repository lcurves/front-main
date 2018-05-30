import {MutationTree} from 'vuex';
import {CreatePlanState} from './types';
import {LessonPlan} from '../types';

export enum MUTATIONS {
    createNewPlan = 'createNewPlan'

}

export const mutations: MutationTree<CreatePlanState> = {
    [MUTATIONS.createNewPlan]: (state: CreatePlanState) => {
        state.plan = new LessonPlan();
    }
};
