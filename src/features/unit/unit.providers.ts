import { Provider } from '@nestjs/common'
import { UnitService } from './application/services/unit.service'
import { SessionRepository } from './domain/repositories/unit.repository'
import { SessionImplRepository } from './infrastructure/repositories/session-impl.repository'

export const sessionRepositoryProvider: Provider<SessionRepository> = {
	provide: SessionRepository,
	useClass: SessionImplRepository
}

export const unitServiceProvider: Provider<UnitService> = {
	provide: UnitService,
	inject: [SessionRepository],
	useFactory: (sessionRepository: SessionRepository) => {
		return new UnitService(sessionRepository)
	}
}
