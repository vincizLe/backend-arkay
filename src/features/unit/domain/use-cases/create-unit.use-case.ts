import { UnitEnum } from '../../../../core/enums/unit.enum'
import { Assessment } from '../entities/assessment.entity'
import { Unit } from '../entities/unit.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class CreateUnitUseCase {
	constructor(private readonly unitRepository: UnitRepository) {}

	async execute(userId: string): Promise<void> {
		const unitArray = new Array<Unit>()

		const assessment = Assessment.create({
			statements: undefined,
			isCompleted: false,
			score: 0
		})

		UnitEnum.toArray().forEach(unitEnum => {
			const unit = Unit.create({
				name: undefined,
				sessions: undefined,
				assessment: undefined,
				practices: undefined,
				isCompleted: false,
				userId: userId
			})

			unitArray.push(unit)
		})

		return await this.unitRepository.saveMany(unitArray)
	}
}
