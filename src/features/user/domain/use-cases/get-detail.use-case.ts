import { User } from '../entities/user.entity'
import { UserRepository } from '../repositories/user.repository'

export class GetDetailUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(userId: string): Promise<User> {
		return await this.userRepository.getById(userId)
	}
}
