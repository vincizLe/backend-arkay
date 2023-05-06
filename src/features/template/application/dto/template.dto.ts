import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsNotEmpty, IsObject, IsOptional, ValidateNested } from 'class-validator'
import { UnitEnum } from '../../../../core/enums/unit.enum'
import { StatementTemplate } from '../../domain/entities/statement-template.entity'
import { PracticeTemplateDto } from './practice-template.dto'
import { SessionTemplateDto } from './session-template.dto'

export class TemplateDto {
	@IsNotEmpty()
	@IsEnum(UnitEnum)
	@ApiProperty({ type: String, enum: UnitEnum.toArray() })
	unit?: UnitEnum

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
