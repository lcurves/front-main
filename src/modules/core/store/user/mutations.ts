import {MutationTree} from 'vuex';
import {UserState, User} from './types';

export enum MUTATIONS {
    userLoaded = 'userLoaded',
    userError = 'userError',
    authenticate = 'authenticate',
    clearUser = 'clearUser'
}

export const mutations: MutationTree<UserState> = {
    [MUTATIONS.userLoaded](state, user: User) {
        state.error = false;
        state.user = user;
        state.isAuthenticating = false;
    },
    [MUTATIONS.userError](state, err: any) {
        state.error = true;
        state.errorMessage = err;
        state.user = undefined;
        state.isAuthenticating = false;
    },
    [MUTATIONS.authenticate](state) {
        state.isAuthenticating = true;
    },
    [MUTATIONS.clearUser](state) {
        state.user = undefined;
        state.error = false;
        state.isAuthenticating = false;
    }
};
