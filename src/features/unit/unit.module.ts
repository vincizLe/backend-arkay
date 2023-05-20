import { Module } from '@nestjs/common'
import { TemplateModule } from '../template/template.module'
import { UserModule } from '../user/user.module'
import { UnitHttpController } from './application/controllers/unit-http.controller'
import { UnitService } from './application/services/unit.service'
import { unitRepositoryProvider } from './unit.providers'

@Module({
	imports: [TemplateModule, UserModule],
	providers: [UnitService, unitRepositoryProvider],
	controllers: [UnitHttpController]
})
export class UnitModule {}
