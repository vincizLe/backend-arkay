import { UnitEnum } from 'src/core/enums/unit.enum'
import { Assessment } from '../entities/assessment.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class SaveAssessmentUseCase {
	constructor(private readonly unitRepository: UnitRepository) {}

	async execute(unitName: UnitEnum, userId: string, assessment: Assessment): Promise<void> {
		const unit = await this.unitRepository.getOne(unitName, userId)

		unit.assessment = assessment

		await this.unitRepository.save(unit)
	}
}
