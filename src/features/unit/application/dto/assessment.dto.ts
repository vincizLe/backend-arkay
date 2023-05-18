import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'

export class StatementDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	id?: string

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
	@ValidateNested()
	@Type(() => String)
	alternativeAnswers = new Array<string>()

	@IsNotEmpty()
	@IsBoolean()
	@ApiProperty()
	isCompleted: boolean

	@IsOptional()
	@IsNumber()
	@ApiPropertyOptional()
	score?: number

	constructor(entity: StatementDto) {
		Object.assign(this, entity)
	}
}

export class AssessmentDto {
	@IsNotEmpty()
	@IsArray()
	@ApiProperty({ type: StatementDto, isArray: true })
	@ValidateNested()
	@Type(() => StatementDto)
	statements = new Array<StatementDto>()

	@IsNotEmpty()
	@IsBoolean()
	@ApiProperty()
	isCompleted: boolean

	@IsOptional()
	@IsNumber()
	@ApiPropertyOptional()
	score?: number

	constructor(entity: AssessmentDto) {
		Object.assign(this, entity)
	}
}
