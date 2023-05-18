import { UnitEnum } from 'src/core/enums/unit.enum'
import { Session } from '../entities/session.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class GetSessionUseCase {
	constructor(private readonly unitRepository: UnitRepository) {}

	async execute(unitName: UnitEnum, userId: string): Promise<Session> {
		const unit = await this.unitRepository.getOne(unitName, userId)

		console.log('unit -> ', unit)
		return unit.session
	}
}
