import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class SessionTemplateDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	sessionName: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	videoUrl: string

	constructor(entity: SessionTemplateDto) {
		Object.assign(this, entity)
	}
}
