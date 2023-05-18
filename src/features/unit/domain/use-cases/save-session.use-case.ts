import { UnitEnum } from 'src/core/enums/unit.enum'
import { Session } from '../entities/session.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class SaveSessionUseCase {
	constructor(private readonly unitRepository: UnitRepository) {}

	async execute(unitName: UnitEnum, userId: string, session: Session): Promise<void> {
		const unit = await this.unitRepository.getOne(unitName, userId)

		unit.session = session

		await this.unitRepository.save(unit)
	}
}
