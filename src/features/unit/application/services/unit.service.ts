import { Injectable } from '@nestjs/common'
import { SessionRepository } from '../../domain/repositories/unit.repository'
import { CreateManySessionsUseCase } from '../../domain/use-cases/create-unit.use-case'
import { GetSessionDetailUseCase } from '../../domain/use-cases/get-session-detail.use-case'
import { CreateManySessionsDto } from '../dto/create-many-sessions.dto'
import { SessionDetailDto } from '../dto/session-detail.dto'
import { createManySessionsDtoToSessionsMapper } from '../mappers/create-many-sessions-dto-to-sessions.mapper'
import { sessionToSessionDetailDtoMapper } from '../mappers/session-to-session-detail-sto.mappe'

@Injectable()
export class UnitService {
	constructor(private readonly sessionRepository: SessionRepository) {}

	async getSessionDetail(unitId: string, sessionId: string): Promise<SessionDetailDto> {
		//this.logger.log('inside SessionService.getSessionDetail')

		const useCase = new GetSessionDetailUseCase(this.sessionRepository)

		return sessionToSessionDetailDtoMapper(await useCase.execute(unitId, sessionId))
	}

	async createManySessions(createManySessionsDto: CreateManySessionsDto): Promise<void> {
		//this.logger.log('inside SessionService.createManySessions')

		const useCase = new CreateManySessionsUseCase(this.sessionRepository)

		await useCase.execute(createManySessionsDtoToSessionsMapper(createManySessionsDto))
	}
}
