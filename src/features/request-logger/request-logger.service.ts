import { LogLevel, LoggerService } from '@nestjs/common'

export class RequestLogger implements LoggerService {
	log(message: any, ...optionalParams: any[]) {}
	error(message: any, ...optionalParams: any[]) {}
	warn(message: any, ...optionalParams: any[]) {}
	debug?(message: any, ...optionalParams: any[]) {}
	verbose?(message: any, ...optionalParams: any[]) {}
	setLogLevels?(levels: LogLevel[]) {}
}
