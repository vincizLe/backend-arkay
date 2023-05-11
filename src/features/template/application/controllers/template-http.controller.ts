import { Body, Controller, Get, Put, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { PracticeTemplateDto } from '../dto/practice-template.dto'
import { SessionTemplateDto } from '../dto/session-template.dto'
import { StatementsTemplateDto } from '../dto/statement-template.dto'
import { TemplateDto } from '../dto/template.dto'
import { UnitDto } from '../dto/unit.dto'
import { TemplateService } from '../services/template.service'

@ApiTags('Template')
@Controller({ path: 'template' })
export class TemplateHttpController {
	constructor(private readonly templateService: TemplateService) {}

	@Put('/session')
	@ApiOperation({ summary: 'Actualizar la sessión de la plantilla' })
	async updateSessionTemplate(@Body() sessionTemplateDto: SessionTemplateDto): Promise<void> {
		return await this.templateService.updateSessionTemplate(sessionTemplateDto)
	}

	@Put('/statement')
	@ApiOperation({ summary: 'Actualizar las evaluaciones de la plantilla' })
	async updateStatementTemplate(@Body() statementsTemplateDto: StatementsTemplateDto): Promise<void> {
		return await this.templateService.updateStatementsTemplate(statementsTemplateDto)
	}

	@Put('/practice')
	@ApiOperation({ summary: 'Actualizar la practica de la plantilla' })
	async updatePracticeTemplate(@Body() practiceTemplateDto: PracticeTemplateDto): Promise<void> {
		return await this.templateService.updatePracticeTemplate(practiceTemplateDto)
	}

	@Get()
	@ApiOperation({ summary: 'Obtener plantilla' })
	async getTemplate(@Query() { unit }: UnitDto): Promise<TemplateDto> {
		return await this.templateService.getTemplate(unit)
	}
}
