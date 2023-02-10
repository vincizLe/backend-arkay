import { Unit } from '../entities/unit.entity'

export abstract class UnitRepository {
	abstract saveMany(units: Array<Unit>): Promise<void>
	abstract getOne(userId: string): Promise<Unit>
	// abstract getSessionDetail(unitId: string, sessionId: string): Promise<Session>
	// abstract getAssessment(unitId: string, assessmentId: string): Promise<Assessment>
	// abstract getPractice(unitId: string, assessmentId: string): Promise<Practice>
	// abstract updateAssessment(unitId: string, assessmentId: string): Promise<void>
	// abstract updatePractice(unitId: string, practiceId: string): Promise<void>
}
