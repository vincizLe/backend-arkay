import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'
import { UserIdDto } from './user-id.dto'

export class ListPurchasedItemsDto extends UserIdDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	itemType: string
}
