import * as teacherStore from './teacher';
import * as userStore from './user';

export const modules = {
    [userStore.namespace]: userStore.module,
    [teacherStore.namespace]: teacherStore.module
};
