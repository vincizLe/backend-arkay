import { Injectable } from '@nestjs/common'

@Injectable()
export class UnitService {
	// constructor(private readonly sessionRepository: SessionRepository) {}
	// async getSessionDetail(unitId: string, sessionId: string): Promise<SessionDetailDto> {
	// 	//this.logger.log('inside SessionService.getSessionDetail')
	// 	const useCase = new GetSessionDetailUseCase(this.sessionRepository)
	// 	return sessionToSessionDetailDtoMapper(await useCase.execute(unitId, sessionId))
	// }
	// async createManySessions(createManySessionsDto: CreateManySessionsDto): Promise<void> {
	// 	//this.logger.log('inside SessionService.createManySessions')
	// 	const useCase = new CreateManySessionsUseCase(this.sessionRepository)
	// 	await useCase.execute(createManySessionsDtoToSessionsMapper(createManySessionsDto))
	// }
}
