import Vue from 'vue';
import {makeHot, reload} from '../../util/hot-reload';
import router from './router';
import store from './store';

import './sass/main.scss';

import '../common/components/main-title';

const navbarComponent = () => import('./components/navbar').then(({NavbarComponent}) => NavbarComponent);

if (process.env.ENV === 'development' && module.hot) {
    const navbarModuleId = './components/navbar';

    // first arguments for `module.hot.accept` and `require` methods have to be static strings
    // see https://github.com/webpack/webpack/issues/5668
    makeHot(navbarModuleId, navbarComponent,
        module.hot.accept(navbarModuleId, () => reload(navbarModuleId, (<any>require('./components/navbar')).NavbarComponent)));
}

new Vue({
    el: '#app-main',
    router,
    store,
    components: {
        'navbar': navbarComponent
    }
});
