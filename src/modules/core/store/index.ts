import {Store} from 'vuex';
import { RootState } from './types';
import Vue from 'vue';
import Vuex from 'vuex';
import {modules} from './modules';

Vue.use(Vuex);

export default new Store<RootState>({
    state: {
        creator: 'David Levy'
    },
    modules
});
