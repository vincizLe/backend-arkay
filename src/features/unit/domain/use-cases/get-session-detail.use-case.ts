import { Session } from '../../../unit/domain/entities/session.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class GetSessionDetailUseCase {
	constructor(private readonly unitRepository: UnitRepository) {}

	async execute(unitId: string, sessionId: string): Promise<Session> {
		return await this.unitRepository.getSessionDetail(unitId, sessionId)
	}
}
