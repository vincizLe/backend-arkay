import { Module } from '@nestjs/common'
import { UnitHttpController } from './application/controllers/unit-http.controller'
import { UnitService } from './application/services/unit.service'

@Module({
	providers: [UnitService],
	controllers: [UnitHttpController]
})
export class UnitModule {}
