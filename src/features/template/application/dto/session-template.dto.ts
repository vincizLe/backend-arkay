import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'
import { UnitDto } from './unit.dto'

export class SessionTemplateDto extends UnitDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	sessionName: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	videoUrl: string

	constructor(entity: SessionTemplateDto) {
		super()

		Object.assign(this, entity)
	}
}
