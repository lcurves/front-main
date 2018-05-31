import {Store} from 'vuex';
import { IRootState } from './types';
import Vue from 'vue';
import Vuex from 'vuex';
import {modules} from './modules';

Vue.use(Vuex);

export default new Store<IRootState>({
    state: {
        creator: 'David Levy'
    },
    modules
});
