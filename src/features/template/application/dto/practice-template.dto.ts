import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsString } from 'class-validator'

export class PracticeTemplateDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	statement: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	algorithm: string

	@IsNotEmpty()
	@IsArray()
	@ApiProperty({ isArray: true })
	testData = new Array<[string, string]>()

	constructor(entity: PracticeTemplateDto) {
		Object.assign(this, entity)
	}
}
