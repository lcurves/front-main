import * as teachersModule from '../../teachers';

export const teachers = '/teachers';


export const routes = [
    ...teachersModule.createRoutes(teachers)
];
