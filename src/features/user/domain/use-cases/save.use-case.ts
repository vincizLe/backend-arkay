import { User } from '../entities/user.entity'
import { UserRepository } from '../repositories/user.repository'

export class SaveUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(user: User): Promise<void> {
		if (user.id != null || user.id != undefined) {
			const currentUser = await this.userRepository.getById(user.id)

			currentUser.email = user.email
			currentUser.password = user.password
			currentUser.name = user.name
			currentUser.lastname = user.lastname

			user = currentUser
		}

		await this.userRepository.save(user)
	}
}
