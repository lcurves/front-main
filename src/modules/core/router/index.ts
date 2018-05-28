import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import {makeHot, reload} from '../../../util/hot-reload';
import {OAuthReturnComponent} from '../components/oauth-return';
import {AuthenticatedComponent} from '../components/authenticated';
import {routes} from './modules';

const homeComponent = () => import('../components/home/index').then(({HomeComponent}) => HomeComponent);

if (process.env.ENV === 'development' && module.hot) {
    const homeModuleId = './components/home';

    // first arguments for `module.hot.accept` and `require` methods have to be static strings
    // see https://github.com/webpack/webpack/issues/5668
    makeHot(homeModuleId, homeComponent,
        module.hot.accept(homeModuleId, () => reload(homeModuleId, (<any>require('../components/home')).HomeComponent)));
}

export function createRoutes(prefix: string = ''): RouteConfig[] {
    return [
        {
            path: prefix,
            component: AuthenticatedComponent,
            children: [
                {
                    path: '/',
                    component: homeComponent
                },
                ...routes
            ]
        },
        {
            path: prefix + '/oauth-return',
            component: OAuthReturnComponent,
        }
    ];
}

Vue.use(VueRouter);
export default new VueRouter({mode: 'history', routes: createRoutes()});
