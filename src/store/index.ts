import {Store} from 'vuex';
import { RootState } from './types';
import * as userStore from './user';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Store<RootState>({
    state: {
        creator: 'David Levy'
    },
    modules: {
        [userStore.namespace]: userStore.module
    },
    mutations: {

    },
    actions: {

    }
});
