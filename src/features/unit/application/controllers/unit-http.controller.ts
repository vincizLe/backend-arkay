import { Controller } from '@nestjs/common'
import { Body, Get, Post, Put, Query } from '@nestjs/common/decorators'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserIdDto } from '../../../user/application/dto/user-id.dto'
import { AssessmentDto } from '../dto/assessment.dto'
import { PracticeDto } from '../dto/practice.dto'
import { SessionDto } from '../dto/session.dto'
import { UnitNameDto } from '../dto/unit-name.dto'
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

	@Put('/session')
	@ApiOperation({ summary: 'Actualizar sesión' })
	async updateSession(@Query() { unitName, userId }: UnitNameDto, @Body() sessionDto: SessionDto): Promise<void> {
		return await this.unitService.saveSession(unitName, userId, sessionDto)
	}

	@Put('/assessment')
	@ApiOperation({ summary: 'Actualizar evaluación' })
	async updateAssessment(@Query() { unitName, userId }: UnitNameDto, @Body() assessmentDto: AssessmentDto): Promise<void> {
		return await this.unitService.saveAssessment(unitName, userId, assessmentDto)
	}

	@Put('/practice')
	@ApiOperation({ summary: 'Actualizar práctica' })
	async updatePractice(@Query() { unitName, userId }: UnitNameDto, @Body() practiceDto: PracticeDto): Promise<void> {
		return await this.unitService.savePractice(unitName, userId, practiceDto)
	}

	@Get('/session')
	@ApiOperation({ summary: 'Obtener sesión' })
	@ApiOkResponse({ type: SessionDto, description: 'Evaluación' })
	async getSession(@Query() { unitName, userId }: UnitNameDto): Promise<SessionDto> {
		return await this.unitService.getSession(unitName, userId)
	}

	@Get('/assessment')
	@ApiOperation({ summary: 'Obtener evaluación' })
	@ApiOkResponse({ type: AssessmentDto, description: 'Evaluación' })
	async getAssessment(@Query() { unitName, userId }: UnitNameDto): Promise<AssessmentDto> {
		return await this.unitService.getAssessment(unitName, userId)
	}

	@Get('/practice')
	@ApiOperation({ summary: 'Obtener práctica' })
	@ApiOkResponse({ type: PracticeDto, description: 'Evaluación' })
	async getPractice(@Query() { unitName, userId }: UnitNameDto): Promise<PracticeDto> {
		return await this.unitService.getPractice(unitName, userId)
	}
}
