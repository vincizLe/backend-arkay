import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'
import { UnitDto } from './unit.dto'

export class StatementTemplateDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	question: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	answer: string

	@IsNotEmpty()
	@IsArray()
	@ApiProperty({ type: String, isArray: true })
	alternativeAnswers = new Array<string>()

	constructor(entity: StatementTemplateDto) {
		Object.assign(this, entity)
	}
}

export class StatementsTemplateDto extends UnitDto {
	@IsNotEmpty()
	@IsArray()
	@ApiProperty({ type: StatementTemplateDto, isArray: true })
	@Type(() => StatementTemplateDto)
	@ValidateNested()
	statements = new Array<StatementTemplateDto>()

	constructor(entity: StatementsTemplateDto) {
		super()

		Object.assign(this, entity)
	}
}
