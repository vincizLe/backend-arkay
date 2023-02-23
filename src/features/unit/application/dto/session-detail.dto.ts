import { ApiProperty } from '@nestjs/swagger'

export class SessionDetailDto {
	@ApiProperty()
	id: string

	// @ApiProperty()
	// name: SessionEnum

	@ApiProperty()
	videoUrl: string

	@ApiProperty()
	isCompleted: boolean

	constructor(entity: SessionDetailDto) {
		Object.assign(this, entity)
	}
}
