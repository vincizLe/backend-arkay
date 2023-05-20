import { UnitEnum } from '../../../../core/enums/unit.enum'
import { UserRepository } from '../../../../features/user/domain/repositories/user.repository'
import { Session } from '../entities/session.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class SaveSessionUseCase {
	constructor(private readonly unitRepository: UnitRepository, private userRepository: UserRepository) {}

	async execute(unitName: UnitEnum, userId: string, session: Session): Promise<void> {
		const unit = await this.unitRepository.getOne(unitName, userId)

		unit.session = session

		await this.unitRepository.save(unit)

		const user = await this.userRepository.getById(userId)

		if (!!unit.assessment.score) {
			user.coins = unit.assessment.score + user.coins ?? 0
		}

		let generalScore: number = 0

		for (const unitEnum of UnitEnum.toArray()) {
			const _unit = await this.unitRepository.getOne(unitEnum, userId)

			if (!!_unit.assessment) {
				if (unitEnum === UnitEnum.UNIT_1) {
					generalScore = (_unit.assessment.isCompleted === true ? 10 : 0) + generalScore
					generalScore = (_unit.session.isCompleted === true ? 10 : 0) + generalScore
				} else if (unitEnum === UnitEnum.UNIT_5) {
					generalScore = (_unit.practice.isCompleted === true ? 20 : 0) + generalScore
				} else {
					generalScore = (_unit.assessment.isCompleted === true ? 5 : 0) + generalScore
					generalScore = (_unit.session.isCompleted === true ? 5 : 0) + generalScore
					generalScore = (_unit.practice.isCompleted === true ? 10 : 0) + generalScore
				}
			}
		}

		user.generalScore = generalScore

		await this.userRepository.save(user)
	}
}
