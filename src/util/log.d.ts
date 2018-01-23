export interface ILogger {
    info(msg: any): any;
    warn(msg: any): any;
    error(msg: any): any;
}
export declare class Logger implements ILogger {
    info(msg: any): void;
    warn(msg: any): void;
    error(msg: any): void;
}
