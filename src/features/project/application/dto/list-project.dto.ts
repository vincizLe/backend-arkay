import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsOptional } from 'class-validator'
import { UserIdDto } from 'src/features/user/application/dto/user-id.dto'

export class ListProjectDto extends UserIdDto {
	@IsOptional()
	@IsBoolean()
	@ApiProperty()
	favorite?: boolean = null
}
