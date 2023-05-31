import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateDto } from '../dto/create.dto'
import { GetUserIdDto } from '../dto/get-user-id.dto'
import { ListPurchasedItemsDto } from '../dto/list-purchased-items.dto'
import { PurchasedItemDto } from '../dto/purchased-item.dto'
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

	@Get('/:userId')
	@ApiOperation({ summary: 'Obtener usuario por id' })
	async detail(@Param() { userId }: UserIdDto): Promise<UserDto> {
		return await this.userService.detail(userId)
	}

	@Get('')
	@ApiOperation({ summary: 'Obtener listado de usuarios' })
	async list(): Promise<Array<UserDto>> {
		return await this.userService.list()
	}

	@Get('/get-user-id')
	@ApiOperation({ summary: 'Obtener id del usuario por correo y constraseña' })
	async getUserId(@Query() { email, password }: GetUserIdDto): Promise<string> {
		return await this.userService.getUserId(email, password)
	}

	@Delete('/:userId')
	@ApiOperation({ summary: 'Eliminar usuario por id' })
	async delete(@Param() { userId }: UserIdDto): Promise<void> {
		await this.userService.delete(userId)
	}

	@Get('/:userId/list-purchased-items')
	@ApiOperation({ summary: 'Obtener los items comprados por el usario' })
	async listPurchasedItems(@Param() { userId }: UserIdDto, @Query() { itemType }: ListPurchasedItemsDto): Promise<Array<PurchasedItemDto>> {
		return await this.userService.listPurchasedItem(userId, itemType)
	}
}
