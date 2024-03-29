import { UnitEnum } from 'src/core/enums/unit.enum'
import { Assessment } from '../entities/assessment.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class GetAssessmentUseCase {
	constructor(private readonly unitRepository: UnitRepository) {}

	async execute(unitName: UnitEnum, userId: string): Promise<Assessment> {
		const unit = await this.unitRepository.getOne(unitName, userId)

		return unit.assessment
	}
}
