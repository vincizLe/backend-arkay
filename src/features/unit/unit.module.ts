import { Module } from '@nestjs/common'
import { UnitHttpController } from './application/controllers/unit-http.controller'
import { sessionRepositoryProvider, unitServiceProvider } from './unit.providers'

@Module({
	providers: [unitServiceProvider, sessionRepositoryProvider],
	controllers: [UnitHttpController]
})
export class UnitModule {}
