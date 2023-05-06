import { Injectable, Scope } from '@nestjs/common'
import { User } from '../../domain/entities/user.entity'
import { UserRepository } from '../../domain/repositories/user.repository'
import { GetDetailUseCase } from '../../domain/use-cases/get-detail.use-case'
import { GetUserIdUseCase } from '../../domain/use-cases/get-user-id.use-case'
import { SaveUseCase } from '../../domain/use-cases/save.use-case'
import { CreateDto } from '../dto/create.dto'
import { UserDto } from '../dto/user.dto'
import { userToUserDto } from '../mappers/user-to-user-dto.mapper'

@Injectable({ scope: Scope.DEFAULT })
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async create(createDto: CreateDto): Promise<void> {
		const useCase = new SaveUseCase(this.userRepository)

		await useCase.execute(
			new User({
				email: createDto.email,
				password: createDto.password,
				name: createDto.name,
				lastname: createDto.lastname
			})
		)
	}

	async update(userDto: UserDto): Promise<void> {
		const useCase = new SaveUseCase(this.userRepository)

		await useCase.execute(
			new User({
				id: userDto.id,
				email: userDto.email,
				password: userDto.password,
				name: userDto.name,
				lastname: userDto.lastname
			})
		)
	}

	async detail(userId: string): Promise<UserDto> {
		const useCase = new GetDetailUseCase(this.userRepository)

		const user = await useCase.execute(userId)

		return userToUserDto(user)
	}

	async getUserId(email: string, password: string): Promise<string> {
		const useCase = new GetUserIdUseCase(this.userRepository)

		return await useCase.execute(email, password)
	}

	async delete(userId: string): Promise<void> {
		const useCase = new GetDetailUseCase(this.userRepository)

		await useCase.execute(userId)
	}
}