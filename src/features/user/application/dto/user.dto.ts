import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

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

	constructor(entity: UserDto) {
		Object.assign(this, entity)
	}
}
