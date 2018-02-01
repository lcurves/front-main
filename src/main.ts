import Vue from 'vue';
import { makeHot, reload } from './util/hot-reload';
import  router from './router';
import AuthService from './services/auth-service';

const navbarComponent = () => import('./components/navbar').then(({ NavbarComponent }) => NavbarComponent);
import './sass/main.scss';

if (process.env.ENV === 'development' && module.hot) {
  const navbarModuleId = './components/navbar';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(navbarModuleId, navbarComponent,
    module.hot.accept(navbarModuleId, () => reload(navbarModuleId, (<any>require('./components/navbar')).NavbarComponent)));
}

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': navbarComponent
  }
});
