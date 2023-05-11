import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { UnitEnum } from '../../../../core/enums/unit.enum'

export class GetAssessmentDto {
	@IsNotEmpty()
	@IsEnum(UnitEnum)
	@ApiProperty({ type: String, enum: UnitEnum.toArray() })
	unit?: UnitEnum

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	userId: string
}
