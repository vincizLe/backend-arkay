import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class UnitIdDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	unitId: string
}
