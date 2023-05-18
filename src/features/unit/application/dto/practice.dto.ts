import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class PracticeDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	id: string

	@IsOptional()
	@IsNumber()
	@ApiPropertyOptional()
	score?: number = 0

	@IsNotEmpty()
	@IsBoolean()
	@ApiProperty()
	isCompleted: boolean

	constructor(entity: PracticeDto) {
		Object.assign(this, entity)
	}
}
