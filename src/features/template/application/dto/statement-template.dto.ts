import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsString } from 'class-validator'
import { UnitDto } from './unit.dto'

export class StatementTemplateDto extends UnitDto {
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
		super()

		Object.assign(this, entity)
	}
}
