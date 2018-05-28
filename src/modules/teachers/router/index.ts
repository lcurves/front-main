import {makeHot, reload} from '../../../util/hot-reload';
import {RouteConfig} from 'vue-router';
import {createLessonPlan, lessonPlans} from './modules';

const teacherComponent = () => import('../components/teacher').then(({TeacherComponent}) => TeacherComponent);
const lessonPlansComponent = () => import('../components/lesson-plans').then(({LessonPlansComponent}) => LessonPlansComponent);
const createLessonPlanComponent = () => import('../components/create-lesson-plan').then(({CreateLessonPlanComponent}) => CreateLessonPlanComponent);

if (process.env.ENV === 'development' && module.hot) {
    const teacherModuleId = './components/teacher';
    const lessonPlansModuleId = './components/lesson-plans';
    const createLessonPlanModuleId = './components/create-lesson-plan';

    makeHot(teacherModuleId, teacherComponent,
        module.hot.accept(teacherModuleId, () => reload(teacherModuleId, (<any>require('../components/teacher')).TeacherComponent)));

    makeHot(lessonPlansModuleId, lessonPlansComponent,
        module.hot.accept(lessonPlansModuleId, () => reload(lessonPlansModuleId, (<any>require('../components/lesson-plans')).LessonPlansComponent)));


    makeHot(createLessonPlanModuleId, createLessonPlanComponent,
        module.hot.accept(createLessonPlanModuleId, () => reload(createLessonPlanModuleId, (<any>require('../components/create-lesson-plan')).CreateLessonPlanComponent)));

}

export function createRoutes(prefix: string = ''): RouteConfig[] {
    return [
        {
            path: prefix,
            component: teacherComponent,
        },
        {
            path: prefix + lessonPlans,
            component: lessonPlansComponent,
        },
        {
            path: prefix + createLessonPlan,
            component: createLessonPlanComponent,
        },
    ];
}
