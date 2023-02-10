import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsString } from 'class-validator'

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
