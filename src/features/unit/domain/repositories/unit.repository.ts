import { UnitEnum } from 'src/core/enums/unit.enum'
import { Assessment } from '../entities/assessment.entity'
import { Unit } from '../entities/unit.entity'

export abstract class UnitRepository {
	abstract save(unit: Unit): Promise<void>
	abstract getById(unitId: string): Promise<Unit>
	abstract getAssessment(unit: UnitEnum, userId: string): Promise<Assessment>
}
