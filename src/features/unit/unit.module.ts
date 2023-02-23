import { Module } from '@nestjs/common'
import { UnitHttpController } from './application/controllers/unit-http.controller'

@Module({
	// providers: [unitServiceProvider, sessionRepositoryProvider],
	controllers: [UnitHttpController]
})
export class UnitModule {}
