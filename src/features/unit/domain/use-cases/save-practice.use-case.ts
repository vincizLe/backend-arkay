import { UnitEnum } from 'src/core/enums/unit.enum'
import { UserRepository } from 'src/features/user/domain/repositories/user.repository'
import { Practice } from '../entities/practice.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class SavePracticeUseCase {
	constructor(private readonly unitRepository: UnitRepository, private readonly userRepository: UserRepository) {}

	async execute(unitName: UnitEnum, userId: string, practice: Practice): Promise<void> {
		const unit = await this.unitRepository.getOne(unitName, userId)

		unit.practice = practice

		const user = await this.userRepository.getById(userId)

		if (!!unit.practice) {
			user.coins = unit.practice?.score ?? 0 + user.generalScore ?? 0

			let generalScore: number = 0

			if (unitName === UnitEnum.UNIT_1) {
				//do nothing
			} else if (unitName === UnitEnum.UNIT_5) {
				generalScore = unit.practice.isCompleted === true ? 20 : 0
				user.generalScore = generalScore + user?.generalScore ?? 0
			} else {
				generalScore = unit.practice.isCompleted === true ? 10 : 0
				user.generalScore = generalScore + user?.generalScore ?? 0
			}
		}

		await this.unitRepository.save(unit)
	}
}
