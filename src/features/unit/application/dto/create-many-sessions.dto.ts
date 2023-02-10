import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator'
import { SessionEnum } from '../../domain/enums/session.enum'

export class SessionDto {
	@IsNotEmpty()
	@IsEnum(SessionEnum)
	@ApiProperty({ type: String, enum: SessionEnum.toArray() })
	name: SessionEnum

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	videoUrl: string

	@IsNotEmpty()
	@IsBoolean()
	@ApiProperty()
	isCompleted: boolean

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	unitId: string

	constructor(entity: SessionDto) {
		Object.assign(this, entity)
	}
}

export class CreateManySessionsDto {
	@IsNotEmpty()
	@IsArray()
	@ApiProperty()
	@Type(() => SessionDto)
	@ValidateNested()
	sessions: Array<SessionDto>
}
