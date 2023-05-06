import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateDto } from '../dto/create.dto'
import { UserIdDto } from '../dto/user-id.dto'
import { UserDto } from '../dto/user.dto'
import { UserService } from '../services/user.service'

@ApiTags('User')
@Controller({ path: 'user' })
export class UserHttpController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@ApiOperation({ summary: 'Crear usuario' })
	async create(@Body() createDto: CreateDto): Promise<void> {
		await this.userService.create(createDto)
	}

	@Put()
	@ApiOperation({ summary: 'Actualizar usuario' })
	async update(@Body() userDto: UserDto): Promise<void> {
		await this.userService.update(userDto)
	}

	@Get('/:id')
	@ApiOperation({ summary: 'Obtener usuario por id' })
	async detail(@Param() { id }: UserIdDto): Promise<UserDto> {
		return await this.userService.detail(id)
	}

	@Delete('/:id')
	@ApiOperation({ summary: 'Eliminar usuario por id' })
	async delete(@Param() { id }: UserIdDto): Promise<void> {
		await this.userService.delete(id)
	}
}
