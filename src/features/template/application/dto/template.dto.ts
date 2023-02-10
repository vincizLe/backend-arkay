import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator'
import { StatementTemplate } from '../../domain/entities/statement-template.entity'
import { PracticeTemplateDto } from './practice-template.dto'
import { SessionTemplateDto } from './session-template.dto'

export class TemplateDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	unitId: string

	@IsOptional()
	@IsObject()
	@ApiProperty({ type: PracticeTemplateDto })
	@Type(() => PracticeTemplateDto)
	@ValidateNested()
	practiceTemplate?: PracticeTemplateDto

	@IsOptional()
	@IsObject()
	@ApiProperty({ type: SessionTemplateDto })
	@Type(() => SessionTemplateDto)
	@ValidateNested()
	sessionTemplate?: SessionTemplateDto

	@IsOptional()
	@IsObject()
	@ApiProperty({ type: PracticeTemplateDto })
	@Type(() => PracticeTemplateDto)
	@ValidateNested()
	statementTemplate?: StatementTemplate

	constructor(entity: TemplateDto) {
		Object.assign(this, entity)
	}
}
