import {ActionTree} from 'vuex';
import {UserState} from './types';
import {RootState} from '../types';
import authService from '../../services/auth-service';

export enum ACTIONS {
    userLoggedIn = 'userLoggedIn',
    enrichAuthentication = 'enrichAuthentication'
}


export const actions: ActionTree<UserState, RootState> = {
    [ACTIONS.userLoggedIn]({commit}): Promise<any> {

        commit('authenticate');

        return authService
            .handleAuthentication()
            .then(userInfo => commit('userLoaded', userInfo))
            .then(() => this.$router.push('/'))
            .catch(err => commit('userError', err));
    },
    [ACTIONS.enrichAuthentication]({commit, state}): Promise<any> {
        if(state.isAuthenticating) return;

        if (authService.isAuthenticated()) {
            if (state.user) {
                return Promise.resolve(state.user);
            } else {
                return authService
                    .getData()
                    .then(userInfo => commit('userLoaded', userInfo))
                    .catch(err => commit('userError', err));
            }
        } else {
            authService.login();
        }
    }
};
