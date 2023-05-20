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
		user.generalScore = unit?.session?.score ?? 0 + unit?.assessment?.score ?? 0 + unit?.practice?.score ?? 0

		await this.userRepository.save(user)
	}
}
