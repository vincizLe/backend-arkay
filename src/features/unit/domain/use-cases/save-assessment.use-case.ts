import { UnitEnum } from 'src/core/enums/unit.enum'
import { UserRepository } from 'src/features/user/domain/repositories/user.repository'
import { Assessment } from '../entities/assessment.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class SaveAssessmentUseCase {
	constructor(private readonly unitRepository: UnitRepository, private readonly userRepository: UserRepository) {}

	async execute(unitName: UnitEnum, userId: string, assessment: Assessment): Promise<void> {
		const unit = await this.unitRepository.getOne(unitName, userId)

		unit.assessment = assessment

		await this.unitRepository.save(unit)

		const user = await this.userRepository.getById(userId)

		if (!!unit.assessment) {
			if (!!unit.assessment.score) {
				user.coins = unit.assessment.score + user.coins ?? 0
			}

			let generalScore: number = 0

			if (unitName === UnitEnum.UNIT_1) {
				generalScore = unit.assessment.isCompleted === true ? 10 : 0
				generalScore = (unit.session.isCompleted === true ? 10 : 0) + generalScore

				user.generalScore = generalScore
			} else if (unitName === UnitEnum.UNIT_5) {
				generalScore = unit.practice.isCompleted === true ? 20 : 0

				user.generalScore = generalScore
			} else {
				generalScore = unit.assessment.isCompleted === true ? 5 : 0
				generalScore = (unit.session.isCompleted === true ? 5 : 0) + generalScore
				generalScore = (unit.practice.isCompleted === true ? 10 : 0) + generalScore

				user.generalScore = generalScore
			}
		}

		await this.userRepository.save(user)
	}
}
