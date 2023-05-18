import { UnitEnum } from 'src/core/enums/unit.enum'
import { Practice } from '../entities/practice.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class SavePracticeUseCase {
	constructor(private readonly unitRepository: UnitRepository) {}

	async execute(unitName: UnitEnum, userId: string, practice: Practice): Promise<void> {
		const unit = await this.unitRepository.getOne(unitName, userId)

		unit.practice = practice

		await this.unitRepository.save(unit)
	}
}
