import { Global, Module } from '@nestjs/common'
import { RequestLogger } from './request-logger.service'

@Global()
@Module({
	providers: [RequestLogger],
	exports: [RequestLogger]
})
export class RequestLoggerModule {}
