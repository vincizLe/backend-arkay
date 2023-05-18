import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty } from 'class-validator'
import { UnitEnum } from '../../../../core/enums/unit.enum'
import { UserIdDto } from './user-id.dto'

export class UnitNameDto extends UserIdDto {
	@IsNotEmpty()
	@IsEnum(UnitEnum)
	@ApiProperty({ type: String, enum: UnitEnum.toArray() })
	unitName?: UnitEnum
}
