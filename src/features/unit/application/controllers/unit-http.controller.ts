import { Controller } from '@nestjs/common'
import { Body, Get, Param, Post } from '@nestjs/common/decorators'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserIdDto } from '../../../user/application/dto/user-id.dto'
import { AssessmentDetailDto } from '../dto/assessment-detail.dto'
import { UnitIdDto } from '../dto/unit-id.dto'
import { UnitService } from '../services/unit.service'

@ApiTags('Session')
@Controller({ path: 'unit' })
export class UnitHttpController {
	constructor(private readonly unitService: UnitService) {}

	@Post('')
	@ApiOperation({ summary: 'Crear unidad' })
	async createUnit(@Body() { id }: UserIdDto): Promise<void> {
		return await this.unitService.save(id)
	}

	@Get(':unitId/assessment')
	@ApiOperation({ summary: 'Obtener evaluación' })
	@ApiOkResponse({ type: AssessmentDetailDto, description: 'Evaluación' })
	async getAssessment(@Param('unitId') { unitId }: UnitIdDto): Promise<AssessmentDetailDto> {
		return await this.unitService.getAssessment(unitId)
	}
}
