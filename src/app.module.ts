import { Module } from '@nestjs/common'
import { UnitModule } from './features/unit/unit.module'

@Module({
	imports: [UnitModule]
})
export class AppModule {}
