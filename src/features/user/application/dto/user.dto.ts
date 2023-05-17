import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class UserDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	id: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	email: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	password: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	name: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	lastname: string

	@IsOptional()
	@IsString()
	@ApiPropertyOptional()
	imageUrl?: string = null

	@IsOptional()
	@IsNumber()
	@ApiPropertyOptional()
	generalScore?: number = 0

	@IsOptional()
	@IsNumber()
	@ApiPropertyOptional()
	coins?: number = 0

	@IsOptional()
	@IsBoolean()
	@ApiPropertyOptional()
	hasReminder?: boolean = false

	@IsOptional()
	@IsDate()
	@ApiPropertyOptional()
	reminderDate?: Date = null

	constructor(entity: UserDto) {
		Object.assign(this, entity)
	}
}
