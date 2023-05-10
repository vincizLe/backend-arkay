import { Assessment } from '../entities/assessment.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class GetAssessmentUseCase {
	constructor(private readonly unitRepository: UnitRepository) {}

	async execute(unitId: string): Promise<Assessment> {
		return await this.unitRepository.getAssessmentByUnitId(unitId)
	}
}
