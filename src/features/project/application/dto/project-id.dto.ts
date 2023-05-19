import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ProjectIdDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	projectId: string
}
