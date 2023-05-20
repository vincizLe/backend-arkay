import { Injectable } from '@nestjs/common'
import { UnitEnum } from 'src/core/enums/unit.enum'
import { UserRepository } from 'src/features/user/domain/repositories/user.repository'
import { TemplateRepository } from '../../../template/domain/repositories/template.repository'
import { UnitRepository } from '../../domain/repositories/unit.repository'
import { GetAssessmentUseCase } from '../../domain/use-cases/get-assessment.use-case'
import { GetPracticeUseCase } from '../../domain/use-cases/get-practice.use-case'
import { GetSessionUseCase } from '../../domain/use-cases/get-session.use-case'
import { SaveAssessmentUseCase } from '../../domain/use-cases/save-assessment.use-case'
import { SavePracticeUseCase } from '../../domain/use-cases/save-practice.use-case'
import { SaveSessionUseCase } from '../../domain/use-cases/save-session.use-case'
import { SaveUnitUseCase } from '../../domain/use-cases/save-unit.use-case'
import { AssessmentDto } from '../dto/assessment.dto'
import { PracticeDto } from '../dto/practice.dto'
import { SessionDto } from '../dto/session.dto'
import { assessmentDtoToAssessment } from '../mappers/assessment-dto-to-assessment.mapper'
import { assessmentToAssessmentDto } from '../mappers/assessment-to-assessment-dto.mapper'
import { practiceDtoToPractice } from '../mappers/practice-dto-to-practice.mapper'
import { practiceToPracticeDto } from '../mappers/practice-to-practice-dto.mapper'
import { sessionDtoToSession } from '../mappers/session-dto-to-session.mapper'
import { sessionToSessionDto } from '../mappers/session-to-session-dto.mapper'

@Injectable()
export class UnitService {
	constructor(
		private readonly unitRepository: UnitRepository,
		private readonly templateRepository: TemplateRepository,
		private readonly userRepository: UserRepository
	) {}

	async save(userId: string): Promise<void> {
		const useCase = new SaveUnitUseCase(this.unitRepository, this.templateRepository)
		await useCase.execute(userId)
	}

	async saveSession(unitName: UnitEnum, userId: string, sessionDto: SessionDto): Promise<void> {
		const useCase = new SaveSessionUseCase(this.unitRepository, this.userRepository)
		await useCase.execute(unitName, userId, sessionDtoToSession(sessionDto))
	}

	async saveAssessment(unitName: UnitEnum, userId: string, assessmentDto: AssessmentDto): Promise<void> {
		const useCase = new SaveAssessmentUseCase(this.unitRepository)
		await useCase.execute(unitName, userId, assessmentDtoToAssessment(assessmentDto))
	}

	async savePractice(unitName: UnitEnum, userId: string, practiceDto: PracticeDto): Promise<void> {
		const useCase = new SavePracticeUseCase(this.unitRepository)
		await useCase.execute(unitName, userId, practiceDtoToPractice(practiceDto))
	}

	async getSession(unitName: UnitEnum, userId: string): Promise<SessionDto> {
		const useCase = new GetSessionUseCase(this.unitRepository)

		return sessionToSessionDto(await useCase.execute(unitName, userId))
	}

	async getAssessment(unitName: UnitEnum, userId: string): Promise<AssessmentDto> {
		const useCase = new GetAssessmentUseCase(this.unitRepository)

		return assessmentToAssessmentDto(await useCase.execute(unitName, userId))
	}

	async getPractice(unitName: UnitEnum, userId: string): Promise<PracticeDto> {
		const useCase = new GetPracticeUseCase(this.unitRepository)

		return practiceToPracticeDto(await useCase.execute(unitName, userId))
	}
}
