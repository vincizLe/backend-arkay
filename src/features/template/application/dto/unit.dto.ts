import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty } from 'class-validator'
import { UnitEnum } from '../../../../core/enums/unit.enum'

export class UnitDto {
	@IsNotEmpty()
	@IsEnum(UnitEnum)
	@ApiProperty({ type: String, enum: UnitEnum.toArray() })
	unit?: UnitEnum
}
