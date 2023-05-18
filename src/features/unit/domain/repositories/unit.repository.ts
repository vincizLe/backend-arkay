import { UnitEnum } from 'src/core/enums/unit.enum'
import { Unit } from '../entities/unit.entity'

export abstract class UnitRepository {
	abstract save(unit: Unit): Promise<void>
	abstract getById(unitId: string): Promise<Unit>
	abstract getOne(unitName: UnitEnum, userId: string): Promise<Unit>
}
