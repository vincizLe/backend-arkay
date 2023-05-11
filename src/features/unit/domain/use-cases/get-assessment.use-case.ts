import { UnitEnum } from 'src/core/enums/unit.enum'
import { Assessment } from '../entities/assessment.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class GetAssessmentUseCase {
	constructor(private readonly unitRepository: UnitRepository) {}

	async execute(unit: UnitEnum, userId: string): Promise<Assessment> {
		return await this.unitRepository.getAssessment(unit, userId)
	}
}
