import { UserRepository } from '../repositories/user.repository'

export class DeleteUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(userId: string): Promise<void> {
		return await this.userRepository.deleteById(userId)
	}
}
