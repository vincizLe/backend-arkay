import { Injectable } from '@nestjs/common'
import { TemplateRepository } from '../../../template/domain/repositories/template.repository'
import { UnitRepository } from '../../domain/repositories/unit.repository'
import { GetAssessmentUseCase } from '../../domain/use-cases/get-assessment.use-case'
import { SaveUnitUseCase } from '../../domain/use-cases/save-unit.use-case'
import { AssessmentDetailDto } from '../dto/assessment-detail.dto'
import { assessmentToAssessmentDetailDto } from '../mappers/assessment-to-assessment-detail.dto'

@Injectable()
export class UnitService {
	constructor(private readonly unitRepository: UnitRepository, private readonly templateRepository: TemplateRepository) {}

	async save(userId: string): Promise<void> {
		const useCase = new SaveUnitUseCase(this.unitRepository, this.templateRepository)
		await useCase.execute(userId)
	}

	async getAssessment(unitId: string): Promise<AssessmentDetailDto> {
		const useCase = new GetAssessmentUseCase(this.unitRepository)

		return assessmentToAssessmentDetailDto(await useCase.execute(unitId))
	}
}
