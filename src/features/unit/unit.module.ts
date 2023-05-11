import { Module } from '@nestjs/common'
import { TemplateModule } from '../template/template.module'
import { UnitHttpController } from './application/controllers/unit-http.controller'
import { UnitService } from './application/services/unit.service'
import { unitRepositoryProvider } from './unit.providers'

@Module({
	imports: [TemplateModule],
	providers: [UnitService, unitRepositoryProvider],
	controllers: [UnitHttpController]
})
export class UnitModule {}
