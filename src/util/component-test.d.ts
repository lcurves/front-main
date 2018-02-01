/// <reference types="sinon" />
import Vue, { Component } from 'vue';
import { SinonSpy } from 'sinon';
import { ILogger } from './log';
export interface IComponents {
    [key: string]: Component;
}
export declare class ComponentTest {
    private template;
    private components;
    vm: Vue;
    constructor(template: string, components: IComponents);
    createComponent(createOptions?: any): void;
    execute(callback: (vm: Vue) => Promise<void> | void): Promise<void>;
}
export declare class MockLogger implements ILogger {
    private loggerSpy;
    constructor(loggerSpy: SinonSpy);
    info(msg: any): void;
    warn(msg: any): void;
    error(msg: any): void;
}
