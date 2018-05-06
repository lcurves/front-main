import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import {makeHot, reload} from './util/hot-reload';
import {OAuthReturnComponent} from './components/oauth-return';

const homeComponent = () => import('./components/home').then(({HomeComponent}) => HomeComponent);
const teacherComponent = () => import('./components/teacher').then(({TeacherComponent}) => TeacherComponent);
const listComponent = () => import('./components/list').then(({ListComponent}) => ListComponent);

if (process.env.ENV === 'development' && module.hot) {
    const homeModuleId = './components/home';
    const teacherModuleId = './components/teacher';
    const listModuleId = './components/list';

    // first arguments for `module.hot.accept` and `require` methods have to be static strings
    // see https://github.com/webpack/webpack/issues/5668
    makeHot(homeModuleId, homeComponent,
        module.hot.accept(homeModuleId, () => reload(homeModuleId, (<any>require('./components/home')).HomeComponent)));

    makeHot(teacherModuleId, teacherComponent,
        module.hot.accept(teacherModuleId, () => reload(teacherModuleId, (<any>require('./components/teacher')).TeacherComponent)));

    makeHot(listModuleId, listComponent,
        module.hot.accept(listModuleId, () => reload(listModuleId, (<any>require('./components/list')).ListComponent)));
}

export function createRoutes(prefix: string = ''): RouteConfig[] {
    return [
        {
            path: prefix + '/',
            component: homeComponent,
        },
        {
            path: prefix + '/oauth-return',
            component: OAuthReturnComponent,
        },
        {
            path: prefix + '/teacher',
            component: teacherComponent,
        },
        {
            path: prefix + '/student',
            component: listComponent,
        }
    ];
}

Vue.use(VueRouter);
export default new VueRouter({mode: 'history', routes: createRoutes()});
