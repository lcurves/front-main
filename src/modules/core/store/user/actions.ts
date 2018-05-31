import {ActionTree} from 'vuex';
import {UserState} from './types';
import {IRootState} from '../types';
import authService from '../../services/auth-service';
import {MUTATIONS} from './mutations';

export enum ACTIONS {
    userLoggedIn = 'userLoggedIn',
    enrichAuthentication = 'enrichAuthentication',
    userLoggedOut = 'userLoggedOut'
}

export const actions: ActionTree<UserState, IRootState> = {
    [ACTIONS.userLoggedIn]({commit}): Promise<any> {

        commit(MUTATIONS.authenticate);

        return authService.handleAuthentication()
            .then(() =>  authService.getData())
            .then(userInfo => commit(MUTATIONS.userLoaded, userInfo))
            .catch(err => commit(MUTATIONS.userError, err));
    },
    [ACTIONS.enrichAuthentication]({commit, state}): Promise<any> {
        if (state.isAuthenticating) return;

        if (authService.isAuthenticated()) {
            if (state.user) {
                return Promise.resolve(state.user);
            } else {
                return authService
                    .getData()
                    .then(userInfo => commit(MUTATIONS.userLoaded, userInfo))
                    .catch(err => commit(MUTATIONS.userError, err));
            }
        } else {
            authService.login();
        }
    },
    [ACTIONS.userLoggedOut]({commit}): any {
        authService.logout();
        commit(MUTATIONS.clearUser);
        Promise
            .resolve()
            .then(() => {
                authService.login();
            });
    }
};
