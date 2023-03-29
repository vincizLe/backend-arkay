import { Module } from '@nestjs/common'
import { DatabaseModule } from './features/database/database.module'
import { TemplateModule } from './features/template/template.module'

@Module({
	imports: [TemplateModule, DatabaseModule]
})
export class AppModule {}
