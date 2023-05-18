import { UnitEnum } from 'src/core/enums/unit.enum'
import { Practice } from '../entities/practice.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class GetPracticeUseCase {
	constructor(private readonly unitRepository: UnitRepository) {}

	async execute(unitName: UnitEnum, userId: string): Promise<Practice> {
		const unit = await this.unitRepository.getOne(unitName, userId)

		return unit.practice
	}
}
