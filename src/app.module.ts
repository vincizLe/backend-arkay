import { Module } from '@nestjs/common'
import { DatabaseModule } from './features/database/database.module'
import { RequestLoggerModule } from './features/request-logger/request-logger.module'
import { TemplateModule } from './features/template/template.module'

@Module({
	imports: [TemplateModule, DatabaseModule, RequestLoggerModule]
})
export class AppModule {}
