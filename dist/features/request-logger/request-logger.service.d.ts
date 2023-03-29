import { LogLevel, LoggerService } from '@nestjs/common';
export declare class RequestLogger implements LoggerService {
    constructor();
    log(message: any, ...optionalParams: any[]): void;
    error(message: any, ...optionalParams: any[]): void;
    warn(message: any, ...optionalParams: any[]): void;
    debug?(message: any, ...optionalParams: any[]): void;
    verbose?(message: any, ...optionalParams: any[]): void;
    setLogLevels?(levels: LogLevel[]): void;
}
