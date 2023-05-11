import { Provider } from '@nestjs/common'
import { UnitRepository } from './domain/repositories/unit.repository'
import { UnitImplRepository } from './infrastructure/repositories/unit-impl.repository'

export const unitRepositoryProvider: Provider<UnitRepository> = {
	provide: UnitRepository,
	useClass: UnitImplRepository
}
