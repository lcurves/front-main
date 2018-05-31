import {GetterTree} from 'vuex';
import {IRootState} from '../../../types';
import {ICreatePlanState} from './types';


export enum GETTERS {
    plan = 'plan'
}


export const getters: GetterTree<ICreatePlanState, IRootState> = {
    [GETTERS.plan]: (state: ICreatePlanState) => (state.plan ? {...state.plan} : null)
};

