import { Controller } from '@nestjs/common'
import { Body, Get, Post, Query } from '@nestjs/common/decorators'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserIdDto } from '../../../user/application/dto/user-id.dto'
import { AssessmentDetailDto } from '../dto/assessment-detail.dto'
import { GetAssessmentDto } from '../dto/get-assessment.dto'
import { UnitService } from '../services/unit.service'

@ApiTags('Unit')
@Controller({ path: 'unit' })
export class UnitHttpController {
	constructor(private readonly unitService: UnitService) {}

	@Post('')
	@ApiOperation({ summary: 'Crear unidad' })
	async createUnit(@Body() { userId }: UserIdDto): Promise<void> {
		return await this.unitService.save(userId)
	}

	@Get(':unitId/assessment')
	@ApiOperation({ summary: 'Obtener evaluación' })
	@ApiOkResponse({ type: AssessmentDetailDto, description: 'Evaluación' })
	async getAssessment(@Query() { unit, userId }: GetAssessmentDto): Promise<AssessmentDetailDto> {
		return await this.unitService.getAssessment(unit, userId)
	}
}
