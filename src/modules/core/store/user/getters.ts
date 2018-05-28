import {GetterTree} from 'vuex';
import {UserState} from './types';
import {RootState} from '../types';


export enum GETTERS {
    fullName = 'fullName',
    isAuthenticated = 'isAuthenticated'
}


export const getters: GetterTree<UserState, RootState> = {
    [GETTERS.fullName]({user}): string {
        const firstName = (user && user.firstName) || '';
        const lastName = (user && user.lastName) || '';
        return `${firstName} ${lastName}`;
    },
    [GETTERS.isAuthenticated]({user, error}): boolean {
        return !error && !!user;
    }
};

