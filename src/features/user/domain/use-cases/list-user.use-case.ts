import { User } from '../entities/user.entity'
import { UserRepository } from '../repositories/user.repository'

export class ListUserUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(): Promise<Array<User>> {
		const users = await this.userRepository.list()

		return users
	}
}
