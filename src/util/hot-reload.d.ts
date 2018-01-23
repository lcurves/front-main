import { Component } from 'vue';
export declare function makeHot(id: string, componentLoader: () => Promise<Component>, acceptFunc: void): Promise<void>;
export declare function reload(id: string, component: Component): void;
