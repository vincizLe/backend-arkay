import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class ProjectDto {
	@IsOptional()
	@IsString()
	@ApiPropertyOptional()
	id?: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	name: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	url: string

	@IsNotEmpty()
	@IsBoolean()
	@ApiProperty()
	isPublished: boolean

	@IsNotEmpty()
	@IsBoolean()
	@ApiProperty()
	isShared: boolean

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	guestId: string

	@IsNotEmpty()
	@IsBoolean()
	@ApiProperty()
	favorite: boolean

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	userId: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	createdDate: string

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	publishedDate: string
}
