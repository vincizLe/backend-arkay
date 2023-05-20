import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class ProductDto {
	@IsNotEmpty()
	@IsString()
	@ApiPropertyOptional()
	id?: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	type: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	name: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	cost: number

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	imageUrl: string

	@IsOptional()
	@IsString()
	@ApiPropertyOptional()
	videoUrl?: string
}
