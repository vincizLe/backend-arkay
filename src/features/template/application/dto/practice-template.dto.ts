import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'
import { UnitDto } from './unit.dto'

export class TestDataDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	input: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	output: string

	constructor(entity: TestDataDto) {
		Object.assign(this, entity)
	}
}

export class PracticeTemplateDto extends UnitDto {
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
	@ApiProperty({ type: TestDataDto, isArray: true })
	@Type(() => TestDataDto)
	@ValidateNested()
	testData = new Array<TestDataDto>()

	constructor(entity: PracticeTemplateDto) {
		super()
		Object.assign(this, entity)
	}
}
