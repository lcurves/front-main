import {MutationTree} from 'vuex';
import {UserState, User} from './types';

export const mutations: MutationTree<UserState> = {
    userLoaded(state, user: User) {
        state.error = false;
        state.user = user;
    },
    userError(state, err: any) {
        state.error = true;
        state.errorMessage = err;
        state.user = undefined;
    },
    authenticate(state) {
        state.isAuthenticating = true;
    }
};
