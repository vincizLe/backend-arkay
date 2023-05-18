import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class SessionDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	id: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	name: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	videoUrl: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	isCompleted: boolean

	@IsOptional()
	@IsNumber()
	@ApiPropertyOptional()
	score?: number = 0

	constructor(entity: SessionDto) {
		Object.assign(this, entity)
	}
}
