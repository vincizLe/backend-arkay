import { UnitEnum } from 'src/core/enums/unit.enum'
import { UserRepository } from 'src/features/user/domain/repositories/user.repository'
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
			user.coins = unit.session?.score ?? 0 + user.generalScore ?? 0

			let generalScore: number = 0

			if (unitName === UnitEnum.UNIT_1) {
				generalScore = unit.session.isCompleted === true ? 10 : 0
				user.generalScore = generalScore + user?.generalScore ?? 0
			} else if (unitName === UnitEnum.UNIT_5) {
				//do nothing
			} else {
				generalScore = unit.session.isCompleted === true ? 5 : 0
				user.generalScore = generalScore + user?.generalScore ?? 0
			}
		}

		await this.userRepository.save(user)
	}
}
