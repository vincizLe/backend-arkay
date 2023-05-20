import { UnitEnum } from 'src/core/enums/unit.enum'
import { UserRepository } from 'src/features/user/domain/repositories/user.repository'
import { Assessment } from '../entities/assessment.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class SaveAssessmentUseCase {
	constructor(private readonly unitRepository: UnitRepository, private readonly userRepository: UserRepository) {}

	async execute(unitName: UnitEnum, userId: string, assessment: Assessment): Promise<void> {
		const unit = await this.unitRepository.getOne(unitName, userId)

		unit.assessment = assessment

		const user = await this.userRepository.getById(userId)

		if (!!unit.assessment) {
			user.coins = unit.assessment?.score ?? 0 + user.generalScore ?? 0

			let generalScore: number = 0

			if (unitName === UnitEnum.UNIT_1) {
				generalScore = unit.assessment.isCompleted === true ? 10 : 0
				user.generalScore = generalScore + user?.generalScore ?? 0
			} else if (unitName === UnitEnum.UNIT_5) {
				//do nothing
			} else {
				generalScore = unit.assessment.isCompleted === true ? 5 : 0
				user.generalScore = generalScore + user?.generalScore ?? 0
			}
		}

		await this.unitRepository.save(unit)
	}
}
