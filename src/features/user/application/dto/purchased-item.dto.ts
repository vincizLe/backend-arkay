import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class PurchasedItemDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	id: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	name: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	type: string
}
