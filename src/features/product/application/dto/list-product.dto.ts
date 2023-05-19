import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ListProductDto {
	@IsNotEmpty()
	@IsString()
	@ApiPropertyOptional()
	type?: string = null
}
