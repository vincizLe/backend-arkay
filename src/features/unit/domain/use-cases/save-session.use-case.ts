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

		if (!!unit.session) {
			if (!!unit.session.score) {
				user.coins = unit.session?.score ?? 0 + user.coins ?? 0
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
