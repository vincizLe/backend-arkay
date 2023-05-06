import { Module } from '@nestjs/common'
import { DatabaseModule } from './features/database/database.module'
import { TemplateModule } from './features/template/template.module'
import { UserModule } from './features/user/user.module'

@Module({
	imports: [DatabaseModule, TemplateModule, UserModule]
})
export class AppModule {}
