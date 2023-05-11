import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class UserIdDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	userId: string
}
