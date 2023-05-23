import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsOptional, IsString } from 'class-validator'

export class ListProjectDto {
	@IsOptional()
	@IsString()
	@ApiPropertyOptional()
	userId: string = null

	@IsOptional()
	@IsBoolean()
	@ApiPropertyOptional()
	favorite?: boolean = null

	@IsOptional()
	@IsBoolean()
	@ApiPropertyOptional()
	isShared?: boolean = null
}
